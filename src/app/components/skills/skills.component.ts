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
    {name: "Angular",logoLink: "assets/icons/angular_icon.svg"},
    {name: "HTML5",logoLink: "assets/icons/html_icon.svg"},
    {name: "CSS3",logoLink: "assets/icons/css_icon.svg"},
    {name: "JavaScript",logoLink: "assets/icons/javascript_logo_icon.svg"},
    {name: "Typescript",logoLink: "assets/icons/typescript_logo_icon.svg"},
    {name: "Java",logoLink: "assets/icons/java_logo_icon.svg"},
    {name: "C#",logoLink: "assets/icons/csharp_logo.svg"},
    {name: "Python",logoLink: "assets/icons/python_icon.svg"},
    {name: "Git",logoLink: "assets/icons/git_plain_logo_icon.svg"},
    {name: "Github",logoLink: "assets/icons/github_logo_icon.svg"},
    {name: "XML",logoLink: "assets/icons/xml_icon.svg"},
    {name: "MySQL",logoLink: "assets/icons/mysql_logo_icon.svg"},
  ];

}
