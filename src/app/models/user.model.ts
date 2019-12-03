import { Homework } from './homework.model';

export class User {
    id: number;
    firstName?: string;
    username: string;
    password: string;
    token?: string;
    homeworks: Array<Homework>;
}
