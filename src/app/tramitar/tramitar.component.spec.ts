import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramitarComponent } from './tramitar.component';

describe('TramitarComponent', () => {
  let component: TramitarComponent;
  let fixture: ComponentFixture<TramitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
