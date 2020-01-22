import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegChildComponent } from './reg-child.component';

describe('RegChildComponent', () => {
  let component: RegChildComponent;
  let fixture: ComponentFixture<RegChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
