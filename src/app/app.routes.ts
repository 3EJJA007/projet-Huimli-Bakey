import { Routes } from '@angular/router';

import { SiteListComponent } from './components/front/site-list/site-list';
import { SiteDetailComponent } from './components/front/site-detail/site-detail';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './components/front/about/about';
import { SiteAdminListComponent } from './components/back/site-admin-list/site-admin-list';
import { SiteAdminFormComponent } from './components/back/site-admin-form/site-admin-form';


export const routes: Routes = [
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', title: 'Accueil', component: HomeComponent },

  
  { path: 'sites', title: 'Sites archéologiques', component: SiteListComponent },

  
  { path: 'sites/:id', title: 'Détail du site', component: SiteDetailComponent },

  
  { path: 'about', title: 'À propos', component: AboutComponent },

  { path: 'admin', title: 'Espace Admin', component: SiteAdminListComponent },
  { path: 'admin/add', component: SiteAdminFormComponent },
];