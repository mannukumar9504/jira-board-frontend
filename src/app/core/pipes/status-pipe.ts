import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: true
})
export class StatusPipe implements PipeTransform {

  transform(issues: any[], status: string): any {
    return issues?.filter(i => i.status === status);
  }

}
