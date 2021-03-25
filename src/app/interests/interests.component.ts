import { Component, OnInit } from '@angular/core';
import { INTERESTS } from '../mock-interests';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  interests = INTERESTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
