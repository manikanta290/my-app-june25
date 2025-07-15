import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataBindingComponent } from './data-binding.component';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule

describe('DataBindingComponent', () => {
  let component: DataBindingComponent;
  let fixture: ComponentFixture<DataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataBindingComponent],
      imports: [FormsModule] // ✅ Include FormsModule here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
