export interface Issue {
    id: number;
    title: string;
    description: string;
    status: 'todo' | 'inprogress' | 'done';
}
