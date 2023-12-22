import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedigerDeltakerComponent } from './rediger-deltaker.component';

describe('RedigerDeltakerComponent', () => {
  let component: RedigerDeltakerComponent;
  let fixture: ComponentFixture<RedigerDeltakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RedigerDeltakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RedigerDeltakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
