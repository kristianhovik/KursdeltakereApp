import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KursdeltakerInformasjonComponent } from './kursdeltaker-informasjon.component';

describe('KursdeltakerInformasjonComponent', () => {
  let component: KursdeltakerInformasjonComponent;
  let fixture: ComponentFixture<KursdeltakerInformasjonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KursdeltakerInformasjonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KursdeltakerInformasjonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
