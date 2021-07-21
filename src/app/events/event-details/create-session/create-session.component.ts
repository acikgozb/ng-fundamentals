//libraries
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
//services
import {ValidatorService} from "../../../core/validator/validator.service";
//interfaces
import {ISession} from "../../shared/event.model";
//classes
import {CreateSessionValidators} from "./create-session-validators/create-session-validators";

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output()
  saveNewSession: EventEmitter<any> = new EventEmitter<ISession>();

  @Output()
  cancel: EventEmitter<any> = new EventEmitter<void>();

  newSessionForm!: FormGroup;

  constructor(
    private validatorService: ValidatorService
  ) {
  }

  ngOnInit(): void {
    this.newSessionForm = new FormGroup({
      name: new FormControl("", Validators.required),
      presenter: new FormControl("", Validators.required),
      duration: new FormControl("", Validators.required),
      level: new FormControl("", Validators.required),
      abstract: new FormControl("", [
        Validators.required,
        Validators.maxLength(400),
        CreateSessionValidators.forbiddenWords(["foo", "bar"])
      ]),
    })
  }

  isFieldInvalid(fieldKey: string) {
    const targetField = this.newSessionForm.controls[fieldKey];

    return targetField.invalid && targetField.dirty;
  }

  getErrorMessages(fieldKey: string) {
    const targetField = this.newSessionForm.controls[fieldKey];

    return this.validatorService.getErrorMessages(targetField);
  }

  saveSession(formValues: any) {
    //to make it more type safe, create an object with type
    const newSession: ISession = {
      id: 0,
      eventId: 0,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    };

    this.saveNewSession.emit(newSession);
  }

  cancelCreateSession() {
    this.cancel.emit();
  }
}
