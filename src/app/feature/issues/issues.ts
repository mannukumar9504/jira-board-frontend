import { Component } from '@angular/core';
import { IssuesService } from '../../core/services/issues';
import { Issue } from '../../core/models/issues';
import { CommonModule } from '@angular/common';
import { IssueForm } from '../issue-form/issue-form';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-issues',
  imports: [CommonModule],
  templateUrl: './issues.html',
  styleUrl: './issues.scss',
})
export class Issues {
  issues : Issue[] = [];

  constructor(private service: IssuesService, 
    private dialogue: MatDialog, 
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service.getIssues().subscribe((data: any) => {
      this.issues = [...data];
    });
  }

  openCreateIssue() {
    const dialogueRef = this.dialogue.open(IssueForm, {
      width: '500px'
    });

    dialogueRef.afterClosed().subscribe((result) => {
      // if(result) {
      //   this.loadIssue();
      //   this.cd.detectChanges();
      // }
      //this.cd.detectChanges();
    })
  }

  delete(id: number) {
    this.service.deleteIssue(id);
  }

  changeStatus(issue: Issue, event: any) {
    const status = (event.target as HTMLSelectElement).value as Issue["status"];
    this.service.updateIssue({...issue, status})
  }
}
