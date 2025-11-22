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
  @Input() commentaires!: Commentaire[];

  @Output() commentaireAjoute = new EventEmitter<Commentaire>();

  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);

  formCommentaire: FormGroup = this.fb.group({
    auteur: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(3)]],
    note: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
  });

onAjouter(): void {
  
    const nouveau: Commentaire = {
      auteur: this.formCommentaire.value.auteur,
      message: this.formCommentaire.value.message,
      note: this.formCommentaire.value.note,
      date: new Date()
    };

    this.commentaireAjoute.emit(nouveau);

    this.formCommentaire.reset({ note: 0 });
    this.cdr.detectChanges(); 
  }
}
