import { Component, OnInit } from '@angular/core';
import { INTERESTS } from '../mock-interests';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {
  interests = INTERESTS;

  constructor() { }

  ngOnInit(): void {
  }

}
