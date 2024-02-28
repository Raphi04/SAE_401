import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemarrageComponent } from './demarrage.component';

describe('DemarrageComponent', () => {
  let component: DemarrageComponent;
  let fixture: ComponentFixture<DemarrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DemarrageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemarrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
