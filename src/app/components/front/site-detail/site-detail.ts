import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { SiteService } from '../../../services/site-service';
import { SiteArcheologique } from '../../../models/site-archeologique.interface';
import { CommentaireAddComponent } from '../commentaire-add/commentaire-add';
import { Commentaire } from '../../../models/commentaire.interface';
import { PrixPipe } from '../../../pipes/prix-pipe';





@Component({
  selector: 'app-site-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, DatePipe, CommentaireAddComponent, PrixPipe],
  templateUrl: './site-detail.html',
  styleUrls: ['./site-detail.css']
})
export class SiteDetailComponent implements OnInit {
  site!: SiteArcheologique;
  private readonly route = inject(ActivatedRoute);
  private readonly siteService = inject(SiteService);
  private readonly cdr = inject(ChangeDetectorRef);


ngOnInit(): void {
  const idSite = this.route.snapshot.params['id'];
  this.siteService.getSiteById(idSite).subscribe(data => {
    this.site = data;
    this.cdr.detectChanges(); 
  });
}

onCommentaireAjoute(nouveau: Commentaire): void {
  this.siteService.addCommentaire(this.site, nouveau).subscribe(siteMaj => {
    this.site = siteMaj;              // mise à jour du site local
    this.cdr.detectChanges();         // rafraîchissement pour le mode zoneless
    
  });
}
}