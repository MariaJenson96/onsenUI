import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PwaInstallService } from './services/pwa-install.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  constructor(private pwaInstallService: PwaInstallService) {}
  

  public installApp(): void {
    this.pwaInstallService.promptInstall();
  }
  
  showAlert() {

  }

  activeTab = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
