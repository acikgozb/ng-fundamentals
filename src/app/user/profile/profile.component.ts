import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(
        this.authService.currentUser.firstName,
        [
          Validators.required,
          Validators.pattern("[a-zA-Z].*")
        ]
        ),
      lastName: new FormControl(
        this.authService.currentUser.lastName,
        [Validators.required]
      )
    });
  }

  isFieldValid(fieldKey: string): boolean {
    const targetField = this.profileForm.controls[fieldKey];

    return targetField.valid || targetField.untouched;
  }

  cancel() {
    this.router.navigate(["events"]);
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(["events"]);
    }
  }
}
