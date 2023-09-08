import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { switchMap, take, tap } from 'rxjs';
import { LandingService } from '../../services/landing.service';
import { NotificationService } from '../../services/notification.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public formControl = this.formBuilder.group({
    remitant: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  public errors = [];

  private formData: {
    remitant?: string;
    email?: string;
    subject?: string;
    message?: string;
  };

  public template: Record<string, any>;

  public isDisabled: boolean = false

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly transloco$: TranslocoService,
    private readonly landing$: LandingService,
    private readonly notification: NotificationService,
    private readonly ui$: UiService
  ) {}

  ngOnInit(): void {
    this.transloco$
      .selectTranslateObject('LANDING_MODULE.ContactPage')
      .pipe(
        switchMap((template) => {
          this.template = template;
          this.ui$.stopLoading()
          return this.formControl.valueChanges;
        })
      )
      .subscribe(() => {
        this.hasErrors();
      });
  }

  setUpperCase(value: string, name: string) {
    if (name === 'email')
      return this.formControl.controls[name].setValue(value.trim());
  }

  hasErrors() {
    let controls = this.formControl.controls;
    console.log('this.formControl', controls);
    for (let control in controls) {
      console.log('control :>> ', control);
      if (Object.keys(controls?.[control]?.errors || {})) {
      }
    }
  }

  onSubmit() {
    // let values;
    this.isDisabled = true
    this.formData = this.formControl.value;
    console.log('first', 'first');
    this.landing$.sendEmail(this.formData)
    .subscribe((response: {message: string}) => {
      this.formControl.reset();
      this.notification.showNotification(response.message),
      this.isDisabled = false
    });
  }
}
