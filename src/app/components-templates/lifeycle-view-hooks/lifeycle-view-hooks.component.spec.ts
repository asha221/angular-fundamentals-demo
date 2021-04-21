import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeycleViewHooksComponent } from './lifeycle-view-hooks.component';

describe('LifeycleViewHooksComponent', () => {
  let component: LifeycleViewHooksComponent;
  let fixture: ComponentFixture<LifeycleViewHooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeycleViewHooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeycleViewHooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
