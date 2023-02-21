import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-custom-wrapper',
  templateUrl: './formly-custom-wrapper.component.html',
  styleUrls: ['./formly-custom-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyCustomWrapperComponent extends FieldWrapper {

  showErr(field: FormlyFieldConfig) {
    return field.formControl && field.formControl.invalid && field.formControl.touched;
  }

}
