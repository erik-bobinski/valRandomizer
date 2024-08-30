import { Component } from '@angular/core';

@Component({
  selector: 'app-challenge-generation',
  standalone: true,
  imports: [],
  templateUrl: './challenge-generation.component.html',
  styleUrl: './challenge-generation.component.css'
})
export class ChallengeGenerationComponent {

   // for playHoverSound()
   private isFirstInteraction = true;

  playHoverSound(audioElement: HTMLAudioElement) {
    if (this.isFirstInteraction) {
      // play audio silently on first interaction to enable hover audio
      audioElement.volume = 0;
      audioElement.play().then(() => {
        audioElement.pause();
        audioElement.currentTime = 0;
        audioElement.volume = 1; // restore volume for subsequent plays
      });
      this.isFirstInteraction = false;
    }

    audioElement.play();
  }

}
