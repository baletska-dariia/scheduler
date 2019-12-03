import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;
        console.log(url);
        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/homework') && method === 'POST':
                    return addHomework();
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/homeworks') && method === 'GET':
                    return getHomeworks();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions
        function getHomeworks() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            return okAsync(currentUser.homeworks);
        }
        function addHomework() {
            const homework = body;
            const user = JSON.parse(localStorage.getItem('currentUser'));
            user.homeworks = [...user.homeworks, homework];
            localStorage.setItem('currentUser', JSON.stringify(user));
            const newUsers = users.filter(x => x.username !== user.username);
            newUsers.push(user);
            localStorage.setItem('users', JSON.stringify(newUsers));
            location.reload();
            return okAsync();
        }

        function register() {
            const user = body;

            if (users.find(x => x.username === user.username)) {
                return error(
                    'Username "' + user.username + '" is already taken'
                );
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            user.token = `eyJhbGciOiJIUzI1
                NiIsInR5cCI6IkpXVCJ9.
                eyJzdWIiOiIxMjM0NTY3ODkwIiw
                ibmFtZSI6IkpvaG4gRG9
                lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
                SflKxwRJSMeKKF2QT4fwpM
                eJf36POk6yJV
                _adQssw5c`;
            user.homeworks = [];
            users.push(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function authenticate() {
            const { username, password } = body;

            const user = users.find(
                x => x.username === username && x.password === password
            );

            if (!user || !user.token) {
                return error('Username or password is incorrect');
            }

            localStorage.setItem('currentUser', JSON.stringify(user));

            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: user.token,
            });
        }

        function getUsers() {
            if (!isLoggedIn()) {
                return unauthorized();
            }
            return ok(users);
        }

        function getUserById() {
            if (!isLoggedIn()) {
                return unauthorized();
            }

            const user = users.find(x => x.id == idFromUrl());
            return ok(user);
        }

        function deleteUser() {
            if (!isLoggedIn()) {
                return unauthorized();
            }

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // helper functions

        function ok(body?) {
            location.reload();
            return of(new HttpResponse({ status: 200, body }));
        }

        function okAsync(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function unauthorized() {
            return throwError({
                status: 401,
                error: { message: 'Unauthorised' },
            });
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1], 10);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true,
};
