import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateintexpComponent } from './createintexp.component';

describe('CreateintexpComponent', () => {
  let component: CreateintexpComponent;
  let fixture: ComponentFixture<CreateintexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateintexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateintexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
