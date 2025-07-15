import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Sibling1Component } from './sibling1.component';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel
import { Sibling2Component } from '../sibling2/sibling2.component'; // ✅ If used in the template

describe('Sibling1Component', () => {
  let component: Sibling1Component;
  let fixture: ComponentFixture<Sibling1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        Sibling1Component,
        Sibling2Component // ✅ Include if Sibling2 is used
      ],
      imports: [
        FormsModule // ✅ Fixes the ngModel error
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sibling1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
