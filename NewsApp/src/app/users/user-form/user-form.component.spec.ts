import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isEdit should be false by default', () => {
    expect(component.isEdit).toBeFalse();
  });

  it('isEdit should be true when route has id', () => {
    const route = TestBed.inject(ActivatedRoute);
    route.params = of({id: 1});
    fixture.detectChanges();
    expect(component.isEdit).toBeTrue();
  });

  it('should have add button when isEdit is false', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Add');
  });

  it('should have edit button when isEdit is true', () => {
    component.isEdit = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Edit');
  });
});
