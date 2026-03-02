import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { ValidationError } from "@angular/forms/signals";
import { delay, map, Observable, of } from "rxjs";
import { IssuesService } from "../services/issues";

export function issueNameTakenValidators(issueService: IssuesService):  AsyncValidatorFn {
    return (control: AbstractControl):  any => {
        if(!control.value) return of(null);
        return issueService.checkIssueName(control.value).pipe(
            delay(1000),
            map(value => {
                if(value === control.value){
                    return { issuenameTaken : true}
                }
                return null;
            })
        )
    }
}