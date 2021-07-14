//libraries
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CreateSessionValidators {

  static forbiddenWords(words: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value: string = control.value;

      const hasForbiddenWords = words.some(word => value.includes(word));

      if(hasForbiddenWords){
        return {
          forbiddenWords: words.filter(word => value.includes(word))
        }
      }

      return null;
    }
  }
}
