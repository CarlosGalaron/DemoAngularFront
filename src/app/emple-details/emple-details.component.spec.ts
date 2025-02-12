import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleDetailsComponent } from './emple-details.component';

describe('EmpleDetailsComponent', () => {
  let component: EmpleDetailsComponent;
  let fixture: ComponentFixture<EmpleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpleDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
