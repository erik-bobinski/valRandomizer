import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AgentGenerationComponent } from './agent-generation/agent-generation.component';
import { ChallengeGenerationComponent } from './challenge-generation/challenge-generation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AgentGenerationComponent, ChallengeGenerationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'valRandomizer';
}
