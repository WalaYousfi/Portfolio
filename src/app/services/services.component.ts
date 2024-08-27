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
      title: 'title',
      icon: 'icon',
      description:
        "    Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    },
    {
      title: 'title',
      icon: 'icon',
      description:
        "    Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    },
    {
      title: 'title',
      icon: 'icon',
      description:
        "    Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    },
    {
      title: 'title',
      icon: 'icon',
      description:
        "    Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    },
    {
      title: 'title',
      icon: 'icon',
      description:
        "    Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    },
    {
      title: 'title',
      icon: 'icon',
      description:
        "    Explore my portfolio to see how I bring ideas to life through fullstack development. Let's collaborate to build something remarkable together.",
    },
  ];
}
