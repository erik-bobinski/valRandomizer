import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentGenerationComponent } from './agent-generation.component';

describe('AgentGenerationComponent', () => {
  let component: AgentGenerationComponent;
  let fixture: ComponentFixture<AgentGenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentGenerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
