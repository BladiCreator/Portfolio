import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { FulfilledProjectComponent } from "./components/fulfilled-project/fulfilled-project.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EducationsComponent } from './components/educations/educations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, SkillsComponent, AboutMeComponent, ExperiencesComponent, FulfilledProjectComponent, NavbarComponent, FooterComponent, ContactMeComponent, EducationsComponent]
})
export class AppComponent {
  title = 'Portfolio';
}
