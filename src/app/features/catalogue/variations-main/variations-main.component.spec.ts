import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationsMainComponent } from './variations-main.component';

describe('VariationsMainComponent', () => {
  let component: VariationsMainComponent;
  let fixture: ComponentFixture<VariationsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VariationsMainComponent]
    });
    fixture = TestBed.createComponent(VariationsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
