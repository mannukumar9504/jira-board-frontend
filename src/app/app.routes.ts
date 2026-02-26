import { Routes } from '@angular/router';
import { Issues } from './feature/issues/issues';
import { IssueForm } from './feature/issue-form/issue-form';

export const routes: Routes = [
    {path: '', component: Issues},
    {path: 'create', component: IssueForm}
];
