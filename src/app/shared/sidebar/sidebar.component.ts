import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    /* esto le dice al html que los li de este componente  van a tener el cursor en pointer */
      li {
        cursor: pointer;
      }
    `
  ]
})
export class SidebarComponent {

}
