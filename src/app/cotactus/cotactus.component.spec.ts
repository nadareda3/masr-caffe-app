import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactusComponent } from './cotactus.component';

describe('CotactusComponent', () => {
  let component: CotactusComponent;
  let fixture: ComponentFixture<CotactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotactusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
