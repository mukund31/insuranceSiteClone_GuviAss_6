import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SubscribeSectionComponent } from './components/subscribe-section/subscribe-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, BannerComponent, FeaturesSectionComponent, ServicesSectionComponent, SubscribeSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'insuranceSiteClone_GuviAss_6';
}
