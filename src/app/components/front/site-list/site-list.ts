import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { SiteService } from '../../../services/site-service';
import { FormsModule } from '@angular/forms';

import { RouterLink } from '@angular/router';
import { SiteArcheologique } from '../../../models/site-archeologique.interface';
import { SiteItemComponent } from "../site-item/site-item";

@Component({
  selector: 'app-site-list',
  standalone: true,
  imports: [ FormsModule,SiteItemComponent],
  templateUrl: './site-list.html',
  styleUrls: ['./site-list.css']
})
export class SiteListComponent implements OnInit {
  sites: SiteArcheologique[] = [];
  searchName = "";
  searchPrice = 0;
  private readonly siteService = inject(SiteService);
  private readonly cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.siteService.getSites().subscribe(data => {
      this.sites = data;
      
      this.cdr.detectChanges();
    });
  }

  filtrerSites() {
    let resultat: SiteArcheologique[] = [];

    for (let i = 0; i < this.sites.length; i++) {
      let s = this.sites[i];

      let nomOK = true;
      let prixOK = true;

      if (this.searchName != "") {
        nomOK = s.nom.toLowerCase().startsWith(this.searchName.toLowerCase());
      }

      if (this.searchPrice > 0) {
        prixOK = s.prixEntree <= this.searchPrice;
      }

      if (nomOK && prixOK) {
        resultat.push(s);
      }
    }

    return resultat;
  }
}
