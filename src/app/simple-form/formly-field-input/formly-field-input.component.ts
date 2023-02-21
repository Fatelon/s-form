import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-input',
  templateUrl: './formly-field-input.component.html',
  styleUrls: ['./formly-field-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormlyFieldInputComponent extends FieldType<FieldTypeConfig> {

}
