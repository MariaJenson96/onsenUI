import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PwaInstallService } from './services/pwa-install.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  imports: [ IonicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas:[]
})
export class AppComponent {
  constructor(private pwaInstallService: PwaInstallService) {}
  

  public installApp(): void {
    this.pwaInstallService.promptInstall();
  }
  
  showAlert() {

  }
}
