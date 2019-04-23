import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  experience: number;

  constructor() { }

  ngOnInit() {
    this.experience = this.getExperience();
  }

  getExperience() {
    const experienceStarted = new Date(1470031200000);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - experienceStarted.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.floor(diffDays / 365);
  }

}
