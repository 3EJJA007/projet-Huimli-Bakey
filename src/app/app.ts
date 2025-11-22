import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { MenuFrontComponent } from './pages/menu-front/menu-front';
import { FooterComponent } from './pages/footer/footer';
import { SiteListComponent } from "./components/front/site-list/site-list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuFrontComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App { }
