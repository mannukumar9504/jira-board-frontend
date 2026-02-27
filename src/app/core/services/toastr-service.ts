import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  constructor(private snack: MatSnackBar){}

  success(message: string) {
    this.snack.open(message, 'close', {
      duration: 2500,
      panelClass: ['toast-success']
    })
  }

  error(message: string) {
     this.snack.open(message, 'close', {
      duration: 3000,
      panelClass: ['toast-error']
    })
  }
  
  info(message: string) {
    this.snack.open(message, 'Close', {
      duration: 2500
    });
  }

}
