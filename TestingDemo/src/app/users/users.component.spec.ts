import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent]
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#generateUser should return array of user', () => {
    const result = component.generateUser();
    const dataUsers = component.dataUsers;
    expect(result).toEqual(dataUsers);
  });
  
  it('Users should have property name', () => {
    const result = component.generateUser();
    expect(result[0].name).toBeTruthy();
  });

  it('#getUserFromAPI should return array of user', () => {
    const responseAPI = [
      { id: 1, name: 'TEST USERNAME', email: 'sd'}
    ];
    spyOn(component, 'getUserFromAPI').and.returnValue(responseAPI);
    const result = component.getUserFromAPI();
    expect(result).toEqual(responseAPI);

  });


});
