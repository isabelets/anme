import { Component, OnInit } from '@angular/core';
import { SOCIALS } from '../mock-social';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {
  socials = SOCIALS;
  constructor() { }

  ngOnInit(): void {
  }

  getSocials(){}

}
