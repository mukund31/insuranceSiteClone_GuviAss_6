import { Component } from '@angular/core';
import { ServicesCardComponent } from '../services-card/services-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServicesCardComponent],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss']
})
export class ServicesSectionComponent {
  cards = [
    {
      title: 'Business Insurance',
      category: 'Insurance • Vehicle',
      imageUrl: 'https://thebestdamnroofingcompanyintexas.com/wp-content/uploads/2024/08/srvc2.jpg'
    },
    {
      title: 'Vehicle Insurance',
      category: 'Insurance • Vehicle',
      imageUrl: 'http://shijufinancial.com/wp-content/uploads/2019/02/7-3.jpg'
    },
    {
      title: 'Car Insurance',
      category: 'Insurance • Car',
      imageUrl: 'https://www.associaçãogrupoiluminata.com.br/wp-content/uploads/2021/08/sogra1-780x470.png'
    }
  ];
}
