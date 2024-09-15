import { Component } from '@angular/core';
import { ServiceCard } from './service-card';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  services: ServiceCard[] = [
    {
      title: 'Typescript',
      icon: 'bx bxl-typescript bx-md',
      description:
        'Efficiently build scalable, robust applications with clean and type-safe code using TypeScript.',
      style: 'color:#bb56ff',
    },
    {
      title: 'Angular',
      icon: 'bx bxl-angular bx-md',
      description:
        'Develop dynamic, responsive web applications with Angular, focusing on user experience and performance.',
      style: 'color:#ff2c32',
    },
    {
      title: 'Firebase',
      icon: 'bx bxl-firebase bx-md',
      description:
        'Implement seamless backend solutions, including authentication, real-time databases, and cloud functions with Firebase.',
      style: 'color:#ffb93e',
    },
    {
      title: 'Nodejs',
      icon: 'bx bxl-nodejs bx-md',
      description:
        'Create scalable, efficient server-side applications and APIs using Node.js, ensuring robust backend performance.',
      style: 'color:#3cd04a',
    },
    {
      title: 'Java',
      icon: 'bx bxl-java bx-md',
      description:
        'Design and develop enterprise-level applications with Java, focusing on stability and performance.',
      style: 'color:#78d9cd',
    },
    {
      title: 'HTML',
      icon: 'bx bxl-html5 bx-md',
      description:
        'Craft semantic, accessible web pages with HTML5, laying the foundation for responsive and engaging websites.',
      style: 'color:#0e2ed9',
    },
    {
      title: 'CSS',
      icon: 'bx bxl-css3 bx-md',
      description:
        'Style responsive, visually appealing interfaces with modern CSS, creating sleek and user-friendly designs.',
      style: 'color:#56f4ff',
    },
    {
      title: 'Javascript',
      icon: 'bx bxl-javascript bx-md',
      description:
        'Bring websites and applications to life with dynamic, interactive elements using JavaScript.',
      style: 'color:#56ff72',
    },
  ];
}
