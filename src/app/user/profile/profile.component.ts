import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
  }

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

  logout() {
    this.authService.logout()
      .subscribe(() => {
        this.router.navigate(["/user/login"])
      })
  }

  saveProfile(formValues: any) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          this.toastr.success('Profile is saved!');
          this.router.navigate(["events"]);
        });
    }
  }
}
