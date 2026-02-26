import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Issue } from '../models/issues';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private issues$   = new BehaviorSubject<Issue[]>([]);

  getIssues() {
    return this.issues$.asObservable();
  }

  addIssue(issue: Omit<Issue,'id'>) {
    const list  = this.issues$.value;
    const newIssue: Issue = { ...issue, id: Date.now()}
    this.issues$.next([ ...list,newIssue ]);
  }

  updateIssue(issue: Issue) {
    const updated = this.issues$.value.map(i => {
      return i.id === issue.id ? issue : i
    });
    this.issues$.next(updated);
  }

  deleteIssue(id: number) {
    this.issues$.next(this.issues$.value.filter(i => i.id !== id));
  }
}

