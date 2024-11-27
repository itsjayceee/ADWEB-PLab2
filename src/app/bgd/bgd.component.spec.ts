import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgdComponent } from './bgd.component';

describe('BgdComponent', () => {
  let component: BgdComponent;
  let fixture: ComponentFixture<BgdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
