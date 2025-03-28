export class Todo {
    title: string;
    desc: string;
    active: boolean;

    constructor(title: string, desc: string, active: boolean = true) {
        this.title = title;
        this.desc = desc;
        this.active = active; // Default value can be provided if needed
    }
}
