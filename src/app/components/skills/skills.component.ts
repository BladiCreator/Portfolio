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
    {name: "Angular",logoLink: "assets/icons/skills/angular_icon.svg"},
    {name: "HTML5",logoLink: "assets/icons/skills/html_icon.svg"},
    {name: "CSS3",logoLink: "assets/icons/skills/css_icon.svg"},
    {name: "JavaScript",logoLink: "assets/icons/skills/javascript_icon.svg"},
    {name: "TypeScript",logoLink: "assets/icons/skills/typescript_icon.svg"},
    {name: "Bootstrap",logoLink: "assets/icons/skills/bootstrap_icon.svg"},
    {name: "C#",logoLink: "assets/icons/skills/csharp_icon.svg"},
    {name: "Python",logoLink: "assets/icons/skills/python_icon.svg"},
    {name: "Java",logoLink: "assets/icons/skills/java_icon.svg"},
    {name: "Android Studio",logoLink: "assets/icons/skills/android_studio_icon.svg"},
    {name: "Dart",logoLink: "assets/icons/skills/dart_icon.svg"},
    {name: "Flutter",logoLink: "assets/icons/skills/flutter_icon.svg"},
    {name: "MySQL",logoLink: "assets/icons/skills/mysql_icon.svg"},
    {name: "Git",logoLink: "assets/icons/skills/git_icon.svg"},
    {name: "GitHub",logoLink: "assets/icons/skills/github_icon.svg"},
    {name: "XML",logoLink: "assets/icons/skills/xml_icon.svg"},
  ];

}
