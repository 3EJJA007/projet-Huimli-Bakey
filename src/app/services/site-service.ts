import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteArcheologique } from '../models/site-archeologique.interface';
import { Commentaire } from '../models/commentaire.interface';



const URL = 'http://localhost:3000/sites'; 

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  
  private readonly http: HttpClient = inject(HttpClient);

  
  getSites(): Observable<SiteArcheologique[]> {
    return this.http.get<SiteArcheologique[]>(URL);
  }

  
  getSiteById(id: string): Observable<SiteArcheologique> {
    return this.http.get<SiteArcheologique>(`${URL}/${id}`);
  }

  
  addSite(site: SiteArcheologique): Observable<SiteArcheologique> {
    return this.http.post<SiteArcheologique>(URL, site);
  }

  

 
  deleteSite(id: string): Observable<void> {
    return this.http.delete<void>(`${URL}/${id}`);
  }

  addCommentaire(site: SiteArcheologique, nouveau: Commentaire): Observable<SiteArcheologique> {

    const siteMisAJour: SiteArcheologique = {
      id: site.id,
      nom: site.nom,
      localisation: site.localisation,
      photo: site.photo,
      dateDecouverte: site.dateDecouverte,
      prixEntree: site.prixEntree,
      description: site.description,
      ouvert: site.ouvert,
      // 2️⃣ Copier les anciens commentaires et ajouter le nouveau
      commentaires: site.commentaires.concat(nouveau)
    };

    // 3️⃣ Envoyer la mise à jour au serveur
    return this.http.put<SiteArcheologique>(`${URL}/${site.id}`, siteMisAJour);
  }

}

