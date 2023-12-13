import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FulfilledProject } from '../../interfaces/fulfilled-project.interface';

@Component({
  selector: 'fulfilled-project-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fulfilled-project.component.html',
  styleUrl: './fulfilled-project.component.css'
})
export class FulfilledProjectComponent {
  fulfilledProjects: FulfilledProject[] = [
    {name:"Adaclass", description: "Aplicación que te permite pasar lista de los alumnos que hallan participado o no en diferentes clases", skills: ["Flutter", "Dart"]}
  ];
}
