import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../../interfaces/skill.interface.interface';

@Component({
  selector: 'skills-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  
  skills: Skill[] = [
    {name: "Angular",logoLink: "https://th.bing.com/th/id/OIP.UW4z__OL4YcPyGrIN9KqBQHaHa?rs=1&pid=ImgDetMain"},
    {name: "HTML",logoLink: ""},
    {name: "CSS",logoLink: ""},
    {name: "JavaScript",logoLink: ""},
    {name: "Typescript",logoLink: ""},
    {name: "Java",logoLink: ""},
    {name: "C#",logoLink: ""},
    {name: "Python",logoLink: ""},
    {name: "Git",logoLink: ""},
    {name: "Github",logoLink: ""},
    {name: "XML",logoLink: ""},
  ];

}
