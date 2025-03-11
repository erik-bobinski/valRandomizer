import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-challenge-generation',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './challenge-generation.component.html',
  styleUrl: './challenge-generation.component.css',
})
export class ChallengeGenerationComponent {
  challenge: string | null = null;

  constructor(private http: HttpClient) {}

  generateChallenge(): void {
    this.http
      .post<{ response: string }>(
        'http://localhost:3001/api/generate-challenge',
        {}
      )
      .subscribe({
        next: (data) => {
          this.challenge = data.response;
          console.log('Challenge received: ', this.challenge);
        },
        error: (err) => console.error('Error generating challenge: ', err),
      });
  }

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
