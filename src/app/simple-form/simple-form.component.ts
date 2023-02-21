import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyCustomWrapperComponent } from './formly-custom-wrapper/formly-custom-wrapper.component';
import { FormlyFieldInputComponent } from './formly-field-input/formly-field-input.component';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleFormComponent implements OnInit {

  form = new FormGroup({});
  // form: FormGroup = this.formBuilder.group({
  //   email: ['123', [Validators.required, Validators.maxLength(5)]]
  // });

  // unsubscribeOnDestroy$: Subject<boolean> | null = new Subject<boolean>();

  // model = { email: 'email@gmail.com' };
  model = {
    customizable: false
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      wrappers: [FormlyCustomWrapperComponent],
      // type: FormlyFieldInputComponent,
      type: 'input',
      props: {
        label: 'Template Name',
        // required: true,
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
      // expressions: {
      //   hide: (field: FormlyFieldConfig) => {
      //     return field.model?.test === '123';
      //   },
      // }
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
      key: 'Instructions',
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

  ngOnInit(): void {
    // this.form.valueChanges.subscribe(res => console.log('Form changed!!!!', res));
    // this.form.get('email2')?.valueChanges.subscribe(res => console.log('Form changed!!!!', res));
    console.log('ngOnInit', this.form.get('email'));

    queueMicrotask(() => {
      // this.form.get('email')?.valueChanges.subscribe(res => console.log('email changed!', res));
      // this.form.get('email')?.setValidators(Validators.maxLength(5));
      // this.form.get('email')?.patchValue('123dsd');
    });
  }

  onModelChange(model: any) {
    console.log('onModelChange', model);
  }

  onSubmit(model: any) {
    // console.log('onSubmit clicked', model);
    console.log('2222', this.form.get('email2'));
  }

  onSubmitReactive() {
    console.log('onSubmitReactive', this.form.value);
  }

}
