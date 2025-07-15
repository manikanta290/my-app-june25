import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiclesComponent } from './vehicles.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ Import this
import { VehiclesService } from '../vehicles.service'; // Update path as needed

describe('VehiclesComponent', () => {
  let component: VehiclesComponent;
  let fixture: ComponentFixture<VehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehiclesComponent],
      imports: [HttpClientTestingModule], // ✅ Add this
      providers: [VehiclesService], // Optional, if not providedIn: 'root'
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
