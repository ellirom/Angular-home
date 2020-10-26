import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaputComponent } from './zaput.component';

describe('ZaputComponent', () => {
  let component: ZaputComponent;
  let fixture: ComponentFixture<ZaputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
