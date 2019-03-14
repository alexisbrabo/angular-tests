import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReactiveFormComponent } from './data-reactive-form.component';

describe('DataReactiveFormComponent', () => {
  let component: DataReactiveFormComponent;
  let fixture: ComponentFixture<DataReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
