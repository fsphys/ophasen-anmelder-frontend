import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DrawParticipationComponent} from './draw-participation.component';

describe('ParticipationComponent', () => {
  let component: DrawParticipationComponent;
  let fixture: ComponentFixture<DrawParticipationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawParticipationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
