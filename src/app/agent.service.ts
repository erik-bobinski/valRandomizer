import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private agents = [
    { name: 'Viper', videoUrl: 'assets/videos/viper.mp4' },
    { name: 'Omen', videoUrl: 'assets/videos/omen.mp4' },
    { name: 'Cypher', videoUrl: 'assets/videos/cypher.mp4' },
    { name: 'Sova', videoUrl: 'assets/videos/sova.mp4' },
    { name: 'Sage', videoUrl: 'assets/videos/sage.mp4' },
    { name: 'Phoenix', videoUrl: 'assets/videos/phoenix.mp4' },
    { name: 'Jett', videoUrl: 'assets/videos/jett.mp4' },
    { name: 'Raze', videoUrl: 'assets/videos/raze.mp4' },
    { name: 'Breach', videoUrl: 'assets/videos/breach.mp4' },
    { name: 'Reyna', videoUrl: 'assets/videos/reyna.mp4' },
    { name: 'Killjoy', videoUrl: 'assets/videos/killjoy.mp4' },
    { name: 'Skye', videoUrl: 'assets/videos/skye.mp4' },
    { name: 'Yoru', videoUrl: 'assets/videos/yoru.mp4' },
    { name: 'Astra', videoUrl: 'assets/videos/astra.mp4' },
    { name: 'Kayo', videoUrl: 'assets/videos/kayo.mp4' },
    { name: 'Chamber', videoUrl: 'assets/videos/chamber.mp4' },
    { name: 'Neon', videoUrl: 'assets/videos/neon.mp4' },
    { name: 'Fade', videoUrl: 'assets/videos/fade.mp4' },
    { name: 'Harbor', videoUrl: 'assets/videos/harbor.mp4' },
    { name: 'Gekko', videoUrl: 'assets/videos/gekko.mp4' },
    { name: 'Deadlock', videoUrl: 'assets/videos/deadlock.mp4' },
    { name: 'Iso', videoUrl: 'assets/videos/iso.mp4' },
    { name: 'Clove', videoUrl: 'assets/videos/clove.mp4' },
  ];

  getRandomAgent() {
    // random num b/w [0,1), scaled by the length of agents array, rounded down to nearest whole num
    // effectively generates random index b/w 0 to (# of agents in array - 1)
    const randomIndex = Math.floor(Math.random() * this.agents.length); 
    return this.agents[randomIndex];
  }

}

/*
'Viper', 'Omen', 'Cypher', 'Sova',
'Sage', 'Pheonix', 'Jett', 'Raze',
'Breach', 'Reyna', 'Killjoy',
'Skye', 'Yoru', 'Astra', 'Kayo',
'Chamber', 'Neon', 'Fade', 'Harbor',
'Gekko', 'Deadlock', 'Iso', 'Clove'
*/