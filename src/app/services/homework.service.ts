import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Homework } from '../models/homework.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HomeworkService {
    constructor(private http: HttpClient) {}
    addHomework(homework: Homework) {
        return this.http.post(`${environment.apiUrl}/homework`, homework);
    }

    getHomeworks() {
        return this.http.get(`${environment.apiUrl}/homeworks`);
    }
}
