import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEntryCMSComponent } from './menu-entry-cms.component';

describe('MenuEntryCMSComponent', () => {
  let component: MenuEntryCMSComponent;
  let fixture: ComponentFixture<MenuEntryCMSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuEntryCMSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuEntryCMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
