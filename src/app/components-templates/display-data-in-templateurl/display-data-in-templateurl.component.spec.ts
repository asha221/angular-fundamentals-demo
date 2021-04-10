import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataInTemplateurlComponent } from './display-data-in-templateurl.component';

describe('DisplayDataInTemplateurlComponent', () => {
  let component: DisplayDataInTemplateurlComponent;
  let fixture: ComponentFixture<DisplayDataInTemplateurlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDataInTemplateurlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDataInTemplateurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
