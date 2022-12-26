import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarupComponent } from './avatarup.component';

describe('AvatarupComponent', () => {
  let component: AvatarupComponent;
  let fixture: ComponentFixture<AvatarupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
