import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examen';

  menuItems: MenuItem[]=[];
  items:any[]=[]
  
  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
        routerLink: ['/home']
      },
      {
        label: 'Sobre nosotros',
        icon: 'pi pi-address-book',
        routerLink: ['/about']
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        routerLink: ['/contact']
      },
      {
        label: 'Posts',
        icon: 'pi pi-shopping-cart',
        routerLink: ['/post']
      }
    ];
  }
}