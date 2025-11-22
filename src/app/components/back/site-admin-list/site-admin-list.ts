import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteService } from '../../../services/site-service';
import { SiteArcheologique } from '../../../models/site-archeologique.interface';


@Component({
  selector: 'app-site-admin-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './site-admin-list.html',
  styleUrls: ['./site-admin-list.css']
})
export class SiteAdminListComponent implements OnInit {

  sites: SiteArcheologique[] = [];
  private readonly siteService = inject(SiteService);
  private readonly cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.chargerSites();
  }

  chargerSites(): void {
    this.siteService.getSites().subscribe(data => {
      this.sites = data;
      this.cdr.detectChanges();
    });
  }

  supprimerSite(id: string): void {
    
      this.siteService.deleteSite(id).subscribe(() => {
        this.chargerSites(); 
      });
    
  }
}