//interfaces
import {ValidatorFieldKeys} from "./validator-field-keys.interface";
import {ValidatorError} from "./validator-error.interface";

export interface ValidatorErrors {
  [ValidatorFieldKeys.REQUIRED]: ValidatorError,
  [ValidatorFieldKeys.MAXLENGTH]: ValidatorError,
  [ValidatorFieldKeys.FORBIDDEN_WORDS]: ValidatorError
}
