import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBeritaComponent } from './list-berita.component';

describe('ListBeritaComponent', () => {
  let component: ListBeritaComponent;
  let fixture: ComponentFixture<ListBeritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBeritaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBeritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
