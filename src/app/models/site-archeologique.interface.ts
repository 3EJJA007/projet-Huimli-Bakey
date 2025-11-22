import { Commentaire } from "./commentaire.interface";


export interface SiteArcheologique {
  id: string;             
  nom: string;          
  localisation: string;    
  photo: string;          
  dateDecouverte: Date;    
  prixEntree: number; 
  description: string; 
  ouvert: boolean;
  commentaires: Commentaire[]; 
}