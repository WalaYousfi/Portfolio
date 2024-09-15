import { Component } from '@angular/core';
import { Project } from './project';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Hasks',
      description:
        ' Hasks is a task management app built with Angular and Firebase. It allows users to organize tasks efficiently with real-time updates and a simple interface.',
      ProjectLink: 'https://github.com/WalaYousfi/Task-Manager',
      images: [
        '/assets/hasks1.png',
        '/assets/hasks2.png',
        '/assets/hasks3.png',
        '/assets/hasks4.png',
      ],
    },
    {
      title: 'Good Food',
      description:
        ' Good Food is a responsive food delivery website for a restaurant, developed using vanilla JavaScript, HTML, and CSS. It focuses on clean design and smooth user interactions.',
      ProjectLink: 'https://github.com/WalaYousfi/Restaurant_template',
      images: [
        '/assets/resto1.png',
        '/assets/resto2.png',
        '/assets/resto3.png',
        '/assets/resto4.png',
        '/assets/resto5.png',
        '/assets/resto6.png',
      ],
    },
    {
      title: 'Data Science Club Page',
      description:
        " This project is a landing page built in Angular for the IoT and Data Science Club at ISSAT Sousse. It introduces the club's activities with a modern, interactive layout.",
      ProjectLink: 'https://github.com/WalaYousfi/Club',
      images: [
        '/assets/club1.png',
        '/assets/club2.png',
        '/assets/club3.png',
        '/assets/club4.png',
      ],
    },
  ];
}
