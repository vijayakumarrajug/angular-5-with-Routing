import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercomponentComponent } from './usercomponent.component';

describe('UsercomponentComponent', () => {
  let component: UsercomponentComponent;
  let fixture: ComponentFixture<UsercomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
