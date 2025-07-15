import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentComponent } from './parent.component';
import { ChildComponent } from '../child/child.component'; // ✅ Import child
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ParentComponent,
        ChildComponent // ✅ Include child
      ],
      imports: [
        FormsModule // ✅ Required for [(ngModel)] to work in child
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
