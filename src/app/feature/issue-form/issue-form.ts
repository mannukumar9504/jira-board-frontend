import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IssuesService } from '../../core/services/issues';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-issue-form',
  imports: [ReactiveFormsModule, MatDialogModule, MatButtonModule],
  templateUrl: './issue-form.html',
  styleUrl: './issue-form.scss',
})
export class IssueForm {
  form!: FormGroup;
  @ViewChild('inputRef') input! : ElementRef

  constructor(private fb: FormBuilder,
    private service: IssuesService,
    private dialogRef: MatDialogRef<IssueForm>,
    private cd: ChangeDetectorRef
  ) {
    this.form = this.fb.group({
      title: [''],
      description: [''],
      status: 'todo'
    });
  }

  ngAfterViewInit(): void {
   this.input.nativeElement.focus();
  }

  submit() {
    this.service.addIssue(this.form.value as any).subscribe({
      next: res => console.log(res),
      error: err => console.error(err)
    });
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(true);
  }
}
