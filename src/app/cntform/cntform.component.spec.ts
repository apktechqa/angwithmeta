import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntformComponent } from './cntform.component';

describe('CntformComponent', () => {
  let component: CntformComponent;
  let fixture: ComponentFixture<CntformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CntformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CntformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
