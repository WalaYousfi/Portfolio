import { Component } from '@angular/core';
import { Project } from './project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  
projects: Project[]=[
  {
    title:"title",
    description:" Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    ProjectLink:"link",
    images:["image", "image"]
  },
  {
    title:"title",
    description:" Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    ProjectLink:"link",
    images:["image", "image"]
  },
  {
    title:"title",
    description:" Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    ProjectLink:"link",
    images:["image", "image"]
  },
]
}
