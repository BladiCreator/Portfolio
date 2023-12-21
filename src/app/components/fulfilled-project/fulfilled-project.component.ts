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
    {
      name: "ss",
      description: "ss",
      skills: [{ name: "s" }, { name: "s" }],
      url: ""
    },
  ];
}
