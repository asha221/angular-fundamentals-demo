import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeycleContentHooksComponent } from './lifeycle-content-hooks.component';

describe('LifeycleContentHooksComponent', () => {
  let component: LifeycleContentHooksComponent;
  let fixture: ComponentFixture<LifeycleContentHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeycleContentHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeycleContentHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
