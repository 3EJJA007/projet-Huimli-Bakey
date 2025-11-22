import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteService } from '../../../services/site-service';


@Component({
  selector: 'app-site-admin-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './site-admin-form.html'
})
export class SiteAdminFormComponent {

  fb = inject(FormBuilder);
  siteService = inject(SiteService);
  router = inject(Router);

  siteForm: FormGroup = this.fb.group({
      nom: [''],
    localisation: [''],
    photo: [''],
    dateDecouverte: [''],
    prixEntree: ['']
  });

  onSubmit() {
    this.siteService.addSite(this.siteForm.value).subscribe(() => {
      this.router.navigate(['/admin']);
    });
  }
}
