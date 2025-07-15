import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CalulatorComponent } from './calulator.component';

describe('CalulatorComponent', () => {
  let component: CalulatorComponent;
  let fixture: ComponentFixture<CalulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalulatorComponent ],
       imports: [ FormsModule ]
    })
    .compileComponents();


    fixture = TestBed.createComponent(CalulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
