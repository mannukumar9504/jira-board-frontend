import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { Issue } from '../models/issues';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private baseUrl = 'http://localhost:3000/api/issues'
  private issues$   = new BehaviorSubject<Issue[]>([]);
  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get<Issue[]>(this.baseUrl).pipe(
      tap(issues => this.issues$.next(issues))
    )
  }

  addIssue(issue: Omit<Issue,'id'>) {
    console.log("issue==>",issue);
    return this.http.post<Issue>(this.baseUrl, issue).pipe(
      tap(created => {
        const list = this.issues$.value;
        this.issues$.next([...list, created]);
      })
    )
  }

  updateIssue(issue: Issue , id: number) {
    console.log("issuues===>",issue, id);
    return this.http.put<Issue>(`${this.baseUrl}/${id}`, issue).pipe(
      tap(updated => {
        const updatedList = this.issues$.value.map(i =>
          i.id === id ? updated : i
        );
        this.issues$.next(updatedList);
      })
    );
  }

  deleteIssue(id: number) {
   return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      tap(() => {
        const filtered = this.issues$.value.filter(i => i.id !== id);
        this.issues$.next(filtered);
      })
    );
  }
}

