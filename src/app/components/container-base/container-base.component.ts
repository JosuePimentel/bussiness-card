import { Component } from '@angular/core';

@Component({
  selector: 'app-container-base',
  standalone: true,
  imports: [],
  host: {
    "class": "bg-[#000] bg-[url('/assets/images/background.png')] w-full max-w-[600px] min-h-dvh block bg-no-repeat bg-center bg-cover after:block after:w-full after:min-h-dvh after:bg-[rgba(0,0,0,.45)] after:absolute after:top-0 after:left-0"
  },
  templateUrl: './container-base.component.html',
})
export class ContainerBaseComponent {

}
