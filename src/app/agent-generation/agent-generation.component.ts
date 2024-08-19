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
  
  selectedAgent: { name: string, videoUrl: string } | null; // holds current agent and respective video src path

  toggleMuteSrc: string; // holds src path to respective image
  unmuted = 'assets/images/audioOn.svg';
  muted = 'assets/images/audioOff.svg';
  isMuted: boolean = false; // video is initialized to unmuted

  constructor(private agentService: AgentService) {
    this.selectedAgent = null;
    this.toggleMuteSrc = this.unmuted;
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

  toggleMute(): void {
    this.isMuted = !this.isMuted; // toggle muted state

    if (this.isMuted == true) { 
      this.toggleMuteSrc = this.muted; // load muted img path
    }
    else if(this.isMuted == false) { 
      this.toggleMuteSrc = this.unmuted; // load unmuted img path
    }
    else {
      console.log("toggleMute() logic error occurred");
    }
  }

}
