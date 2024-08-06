import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeGenerationComponent } from './challenge-generation.component';

describe('ChallengeGenerationComponent', () => {
  let component: ChallengeGenerationComponent;
  let fixture: ComponentFixture<ChallengeGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeGenerationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
