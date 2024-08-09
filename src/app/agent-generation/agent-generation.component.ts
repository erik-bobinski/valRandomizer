import { Component, ViewChild, ElementRef } from '@angular/core';
import { AgentService } from '../agent.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-generation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent-generation.component.html',
  styleUrl: './agent-generation.component.css'
})
export class AgentGenerationComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;
  
  selectedAgent: { name: string, videoUrl: string } | null;

  constructor(private agentService: AgentService) {
    this.selectedAgent = null;
  }

  getRandomAgent(): void {

    this.selectedAgent = this.agentService.getRandomAgent();

    setTimeout( () => {
      if (this.videoPlayer) {
        this.videoPlayer.nativeElement.load(); // reload video
        this.videoPlayer.nativeElement.play(); // play video again
      }
    }, 0);
  }

}
