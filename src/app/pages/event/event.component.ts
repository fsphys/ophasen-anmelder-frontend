import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../api/api.service";
import {Event} from "../../api/api.domain";
import {switchMap} from "rxjs/operators";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  event?: Event
  form: FormGroup
  backendError?: string
  loading?: boolean;

  constructor(private readonly apiService: ApiService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      surname: ["", [Validators.required, Validators.maxLength(255)]],
      givenName: ["", [Validators.required, Validators.maxLength(255)]],
      mail: ["", [Validators.required, Validators.maxLength(255), Validators.email]],
      hasTicket: [false],
      birthDate: [""],
      birthPlace: ["", [Validators.maxLength(255)]],
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(params => this.apiService.fetchEvent(params['id']))).subscribe(event => this.event = event);
  }


  submit() {
    if (!this.form.valid || !this.event
      || (this.event.needsBirthInformation && (this.form.value.birthDate == '' || this.form.value.birthPlace == ''))) {
      this.backendError = 'Bitte fülle alle Felder aus!'
      return;

    }

    this.backendError = undefined;
    this.loading = true;
    this.apiService.joinEvent(
      this.event.id,
      this.form.value.surname,
      this.form.value.givenName,
      this.form.value.mail,
      this.event.needsHasTicket ? this.form.value.hasTicket : null,
      this.event.needsBirthInformation ? new Date(this.form.value.birthDate).valueOf() / 1000 : null,
      this.event.needsBirthInformation ? this.form.value.birthPlace : null
    )
      .pipe(switchMap(value => this.router.navigate(['/participation', value.id], {queryParams: {success: true}}))).subscribe(value => {
      // noop
    }, error => {
      this.backendError = error.error.message;
      this.loading = false;
    });
  }

}
