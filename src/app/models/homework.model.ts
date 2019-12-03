import { v4 as uuid } from 'uuid';
export class Homework {
    id: string;
    title: string;
    homework: string;
    deadline: string;
    constructor(title: string, homework: string, deadline: string) {
        this.id = uuid();
        this.title = title;
        this.homework = homework;
        this.deadline = deadline;
    }
}
