import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [],
  templateUrl: './services-card.component.html',
  styleUrls: ['./services-card.component.scss']
})
export class ServicesCardComponent {
  @Input() title!: string;
  @Input() category!: string;
  @Input() imageUrl!: string;
}
