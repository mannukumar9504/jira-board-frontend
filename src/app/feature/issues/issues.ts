import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IssuesService } from '../../core/services/issues';
import { Issue } from '../../core/models/issues';
import { CommonModule } from '@angular/common';
import { IssueForm } from '../issue-form/issue-form';
import { MatDialog } from '@angular/material/dialog';
import { ChangeDetectorRef } from '@angular/core';
import { IssueCard } from '../issue-card/issue-card';
import { StatusPipe } from '../../core/pipes/status-pipe';
import { ToastrService } from '../../core/services/toastr-service';

@Component({
  selector: 'app-issues',
  imports: [CommonModule, IssueCard, StatusPipe],
  templateUrl: './issues.html',
  styleUrl: './issues.scss'
})
export class Issues {
  issues : Issue[] = [];

  constructor(private service: IssuesService, 
    private dialogue: MatDialog, 
    private cd: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.getIssues().subscribe((data: any) => {
     this.issues = [...data];
     this.cd.detectChanges();
    });
  }

  openCreateIssue() {
    const dialogueRef = this.dialogue.open(IssueForm, {
      width: '500px'
    });
  }

  delete(id: number) {
    this.service.deleteIssue(id);
  }

  changeStatus(issue: Issue, event: any) {
    const status = (event.target as HTMLSelectElement).value as Issue["status"];

    this.service.updateIssue({...issue, status} , issue.id).subscribe( {
      next: (res) => {
        this.toastr.success('Ticket Updated');
        console.log("res==>",res);
      },
      error: (error) => {
        this.toastr.error('Ticket Updation Failed');
        console.log(error)
      }
    })
  }
}
