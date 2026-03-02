import { Injectable } from '@angular/core';
import { Logger } from '../models/issues';

@Injectable({
  providedIn: 'root',
})
export class ConsoleLogger implements Logger {
  log(message: string) {
    console.log('Console:', message)
  }
}
export class FileLogger implements Logger {
  log(message: string) {
    console.log('File:', message);
  }
}
