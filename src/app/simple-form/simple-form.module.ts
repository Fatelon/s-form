import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleFormComponent } from './simple-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldInputComponent } from './formly-field-input/formly-field-input.component';
import { FormlyCustomWrapperComponent } from './formly-custom-wrapper/formly-custom-wrapper.component';



@NgModule({
  declarations: [
    SimpleFormComponent,
    FormlyFieldInputComponent,
    FormlyCustomWrapperComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'custom-input', component: FormlyFieldInputComponent },
      ],
      wrappers: [
        { name: 'panel', component: FormlyCustomWrapperComponent },
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required!!' },
      ],
    }),
    FormlyBootstrapModule,
  ],
  exports: [
    SimpleFormComponent
  ]
})
export class SimpleFormModule { }
