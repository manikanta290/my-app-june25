import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmailComponent } from './email.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // ✅ required
import { EmailService } from '../email.service'; // adjust path as needed

describe('EmailComponent', () => {
  let component: EmailComponent;
  let fixture: ComponentFixture<EmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailComponent],
      imports: [HttpClientTestingModule], // ✅ Fix here
      providers: [EmailService]
    }).compileComponents();

    fixture = TestBed.createComponent(EmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
