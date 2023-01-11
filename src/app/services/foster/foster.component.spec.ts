import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FosterComponent } from './foster.component';

describe('FosterComponent', () => {
  let component: FosterComponent;
  let fixture: ComponentFixture<FosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
