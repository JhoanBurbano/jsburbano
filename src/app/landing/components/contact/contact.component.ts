import { Component, OnInit } from '@angular/core';
import { FormBuilder, RequiredValidator, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  public formControl = this.formBuilder.group({
    remitant: ['',  Validators.required ],
    email: ['', [Validators.email, Validators.required]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  })

  public template: Record<string, any>;

  constructor(private readonly formBuilder: FormBuilder, private readonly transloco$: TranslocoService) { }

  ngOnInit(): void {
    this.transloco$.selectTranslateObject('LANDING_MODULE.ContactPage')
    .subscribe(template => {
      this.template = template;
    })
  }

  setUpperCase(value: string, name: string){
    console.log('element', value)
    this.formControl.controls[name].setValue(value.toUpperCase())
  }


  onSubmit() {
  }
}
