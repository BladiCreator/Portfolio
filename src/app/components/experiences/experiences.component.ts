import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'experiences-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {

  experiences: Experience[] = [
    {
      name: "Práctica: Desarrollador Front-end",
      date: "2023-03 - 2023-06",
      companyName: "We do the best",
      localization: "Madrid",
      description: "Diseño y creación de páginas web mediante el uso de lenguajes de programación como HTML, CSS y Typescript en el framework Angular."
    }
  ];

}
