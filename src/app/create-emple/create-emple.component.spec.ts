import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpleComponent } from './create-emple.component';

describe('CreateEmpleComponent', () => {
  let component: CreateEmpleComponent;
  let fixture: ComponentFixture<CreateEmpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEmpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEmpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
