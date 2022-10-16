import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteurComponent } from './testeur.component';

describe('TesteurComponent', () => {
  let component: TesteurComponent;
  let fixture: ComponentFixture<TesteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
