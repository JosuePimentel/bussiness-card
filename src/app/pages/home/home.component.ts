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
  host: {
    'class': 'flex w-screen justify-center bg-[#000]'
  },
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
      link: 'https://api.whatsapp.com/send?phone=5562981721535&text=Ol%C3%A1,%20Vim%20pelo%20seu%20card!'
    }
  ]
}
