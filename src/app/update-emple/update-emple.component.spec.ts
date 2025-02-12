import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpleComponent } from './update-emple.component';

describe('UpdateEmpleComponent', () => {
  let component: UpdateEmpleComponent;
  let fixture: ComponentFixture<UpdateEmpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEmpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
