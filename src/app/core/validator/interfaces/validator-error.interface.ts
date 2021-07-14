export interface ValidatorError {
  message: string | ((params: any) => string),
  errorIndex?: string[]
}
