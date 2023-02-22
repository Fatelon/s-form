import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyCustomWrapperComponent } from './formly-custom-wrapper/formly-custom-wrapper.component';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleFormComponent {

  form = new FormGroup({});
  model = {
    customizable: false
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      wrappers: [FormlyCustomWrapperComponent],
      type: 'input',
      props: {
        label: 'Template Name',
      }
    },
    {
      key: 'title',
      wrappers: [FormlyCustomWrapperComponent],
      type: 'input',
      props: {
        label: 'Title Template',
        placeholder: 'Title',
        description: 'Modifiers: ..',
        required: true,
      },
    },
    {
      key: 'description',
      wrappers: [FormlyCustomWrapperComponent],
      type: 'textarea',
      props: {
        label: 'Description Template',
        placeholder: 'Description',
        required: true,
        rows: 2
      },
    },
    {
      key: 'tags',
      wrappers: [FormlyCustomWrapperComponent],
      type: 'input',
      props: {
        label: 'Tags',
      },
    },
    {
      key: 'materials',
      wrappers: [FormlyCustomWrapperComponent],
      type: 'input',
      props: {
        label: 'Materials',
      },
    },
    {
      key: 'customizable',
      type: 'checkbox',
      props: {
        label: 'Is Customizable',
      },
    },
    {
      key: 'instructions',
      wrappers: [FormlyCustomWrapperComponent],
      type: 'textarea',
      props: {
        label: 'Customization Instructions',
        placeholder: 'Leave blank for no message',
        rows: 2
      },
      expressions: { hide: '!model.customizable' },
    },
  ];

  constructor(private readonly formBuilder: FormBuilder) { }

  onModelChange(model: any) {
    console.log('onModelChange', model);
  }

  onSubmit(model: any) {
    console.log('2222', this.form.get('email2'));
  }

  onSubmitReactive() {
    console.log('onSubmitReactive', this.form.value);
  }

}
