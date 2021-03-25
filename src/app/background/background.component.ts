import { Component, OnInit } from '@angular/core';
import { BACKGROUNDS } from '../mock-backgrounds';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  backgrounds = BACKGROUNDS;
 
  constructor() {  }

  ngOnInit(): void {
  }

  getBackgrounds(){
    
  } 

}
