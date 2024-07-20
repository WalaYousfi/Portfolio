import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  switchTheme = new FormControl(false);
  @HostBinding('class') className = '';
  darkClass = 'theme-dark';
  lightClass = 'theme-light';

  constructor(private overlay: OverlayContainer) {}
  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((currenMode) => {
      this.className = currenMode ? this.darkClass : this.lightClass;

      if (currenMode) {
        this.overlay.getContainerElement().classList.add(this.darkClass);
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClass);
      }
    });
  }
}
