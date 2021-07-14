//libraries
import { Injectable } from '@angular/core';
//interfaces
import {ValidatorErrors} from "./interfaces/validator-errors.interface";
import {ValidatorFieldKeys} from "./interfaces/validator-field-keys.interface";
import {AbstractControl} from "@angular/forms";
//utils
import {ObjectUtils} from "../utils/object-utils";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor() { }

  //i18n should be applied. (via DI ?)
  private validatorErrors: ValidatorErrors = {
    [ValidatorFieldKeys.REQUIRED]: {
      message: "Required",
      errorIndex: ["required"]
    },
    [ValidatorFieldKeys.MAXLENGTH]: {
      message: (maxLength: number) => `Cannot exceed ${maxLength} characters`,
      errorIndex: ['maxlength', 'requiredLength']
    },
    [ValidatorFieldKeys.FORBIDDEN_WORDS]: {
      message: (words: string[]) => `Entered invalid words: ${words.join(", ")}`,
      errorIndex: ["forbiddenWords"]
    }
  };

  getErrorMessages(field: AbstractControl) {
    console.log(field.errors);
    if(field.errors) {
      return Object.keys(field.errors)
        .map(errorKey => {
          const invalidField = this.validatorErrors[errorKey as keyof ValidatorErrors];

          if(typeof invalidField.message === "function") {
            return invalidField.message(ObjectUtils.getValueByIndex(invalidField.errorIndex as string[], field.errors));
          }

          return invalidField.message;
        });
    }

    return [];
  }
}
