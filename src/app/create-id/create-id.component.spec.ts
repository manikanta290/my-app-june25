import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateIdComponent } from './create-id.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateIdComponent', () => {
  let component: CreateIdComponent;
  let fixture: ComponentFixture<CreateIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIdComponent],
      imports: [
        ReactiveFormsModule,   // ✅ Required for formGroup to work
        HttpClientTestingModule // ✅ Required if your service uses HttpClient
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
