import { Component, OnInit } from '@angular/core';
import { HARDSKILLS } from '../mock-hard-skills';
import { SOFTSKILLS } from '../mock-soft-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  hardSkills = HARDSKILLS;
  softSkills = SOFTSKILLS;

  mySkills = [
    { title:"Hard Skills", skills: [this.hardSkills] },
    { title: "Soft Skills", skills: [this.softSkills] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getHardSkills() { }

}
