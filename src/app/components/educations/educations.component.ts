import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../interfaces/education.interface';

@Component({
  selector: 'educations-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.css'
})
export class EducationsComponent {
  educations: Education[] = [
    { formation_title: "FP Superior Desarrollo de aplicaciones multiplataforma", school_title: "IES Villaverde" },
    { formation_title: "Desarrollo Front-End", school_title: "Fundación Adecco" },
  ];
}
