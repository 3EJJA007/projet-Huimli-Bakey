import { Component, inject, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Commentaire } from '../../../models/commentaire.interface';


@Component({
  selector: 'app-commentaire-add',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './commentaire-add.html',
  styleUrls: ['./commentaire-add.css']
})
export class CommentaireAddComponent {
  // Le parent (site-detail) enverra ici la liste des commentaires
  @Input() commentaires!: Commentaire[];

  // Événement émis au parent après ajout
  @Output() commentaireAjoute = new EventEmitter<Commentaire>();

  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);

  // Formulaire réactif
  formCommentaire: FormGroup = this.fb.group({
    auteur: [''],
    message: [''],
    note: [0],
  });

onAjouter(): void {
  
    const nouveau: Commentaire = {
      auteur: this.formCommentaire.value.auteur,
      message: this.formCommentaire.value.message,
      note: this.formCommentaire.value.note,
      date: new Date()
    };

    // Émettre l'événement au parent
    this.commentaireAjoute.emit(nouveau);

    // Réinitialiser le formulaire
    this.formCommentaire.reset({ note: 0 });
    this.cdr.detectChanges(); // 🔥 pour le mode zoneless
  }
}
