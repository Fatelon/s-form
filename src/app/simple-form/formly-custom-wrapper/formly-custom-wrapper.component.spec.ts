import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyCustomWrapperComponent } from './formly-custom-wrapper.component';

describe('FormlyCustomWrapperComponent', () => {
  let component: FormlyCustomWrapperComponent;
  let fixture: ComponentFixture<FormlyCustomWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyCustomWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyCustomWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
