import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlipkartComponent } from './flipkart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅
import { FlipkartService } from '../flipkart.service'; // ✅ adjust path if needed

describe('FlipkartComponent', () => {
  let component: FlipkartComponent;
  let fixture: ComponentFixture<FlipkartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlipkartComponent],
      imports: [HttpClientTestingModule], // ✅ Provides HttpClient
      providers: [FlipkartService] // ✅ Optional if injected directly
    }).compileComponents();

    fixture = TestBed.createComponent(FlipkartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
