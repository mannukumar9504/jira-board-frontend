import { InjectionToken } from "@angular/core";
export interface Issue {
    id: number;
    title: string;
    description: string;
    status: 'todo' | 'inprogress' | 'done';
}
export interface Logger {
    log(message:string): void
}
export const LOGGER  = new InjectionToken<Logger>('logger.token');


