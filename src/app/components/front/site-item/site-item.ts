import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteArcheologique } from '../../../models/site-archeologique.interface';
import { PrixPipe } from '../../../pipes/prix-pipe';



@Component({
  selector: 'app-site-item',
  standalone: true,
  imports: [CommonModule, RouterLink, PrixPipe],
  templateUrl: './site-item.html',
  styleUrls: ['./site-item.css']
})
export class SiteItemComponent {
  @Input() site!: SiteArcheologique;
}