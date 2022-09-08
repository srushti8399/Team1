import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntexpComponent } from './intexp.component';

describe('IntexpComponent', () => {
  let component: IntexpComponent;
  let fixture: ComponentFixture<IntexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
