import { Component } from '@angular/core';
import { ContainerBaseComponent } from '../../components/container-base/container-base.component';
import { LogoComponent } from '../../components/logo/logo.component';
import { ButtonComponent } from "../../components/button/button.component";
import { FooterComponent } from '../../components/footer/footer.component';

type button = { text: string, link: string }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContainerBaseComponent,
    LogoComponent,
    ButtonComponent,
    FooterComponent
],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  buttons: button[] = [
    {
      text: 'instagram',
      link: 'https://www.instagram.com/ajpimentel.atelie/'
    },
    {
      text: 'portifólio',
      link: ''
    },
    {
      text: 'whatsapp',
      link: ''
    }
  ]
}
