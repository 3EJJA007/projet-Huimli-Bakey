import { Routes } from '@angular/router';

// ✅ Composants Front-Office
import { SiteListComponent } from './components/front/site-list/site-list';
import { SiteDetailComponent } from './components/front/site-detail/site-detail';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './components/front/about/about';
import { SiteAdminListComponent } from './components/back/site-admin-list/site-admin-list';
import { SiteAdminFormComponent } from './components/back/site-admin-form/site-admin-form';


export const routes: Routes = [
  // page d’accueil
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // accueil = liste des sites
  { path: 'home', title: 'Accueil', component: HomeComponent },

  // liste complète des sites
  { path: 'sites', title: 'Sites archéologiques', component: SiteListComponent },

  // détail d’un site (paramètre id)
  { path: 'sites/:id', title: 'Détail du site', component: SiteDetailComponent },

  // page "À propos"
  { path: 'about', title: 'À propos', component: AboutComponent },

  { path: 'admin', title: 'Espace Admin', component: SiteAdminListComponent },
  { path: 'admin/add', component: SiteAdminFormComponent },
];