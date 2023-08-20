import { OverlayContainer } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isDarkTheme: boolean = false;
  overlayContainer: OverlayContainer;

  //during the theme toggle we need to switch out the classes on the overlay to prevent overlays bieng dark when theme is light
  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    if(this.isDarkTheme) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    }
    else {
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
    }
  }
  constructor(overlayContainer: OverlayContainer) {
    this.overlayContainer = overlayContainer;
  }
}