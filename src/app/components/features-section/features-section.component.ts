import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureCardComponent } from '../feature-card/feature-card.component';

@Component({
    selector: 'app-features-section',
    standalone: true,
    imports: [FeatureCardComponent, CommonModule],
    templateUrl: './features-section.component.html',
    styleUrl: './features-section.component.scss'
})
export class FeaturesSectionComponent {
    cardData = [
        {
            title: 'Money Back Guarantee',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.',
            icon: 'https://theuxcopywriter.com/wp-content/uploads/2023/09/guarantee.png'
        },
        {
            title: 'All Claims At Anytime',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.',
            icon: 'https://img.freepik.com/premium-vector/vector-design-asset-icon-style_822882-399532.jpg?w=360'
        },
        {
            title: 'Digital Insurance Policy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.',
            icon: 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/yUssfwxNWdtSRtJgRNlr/media/6550f26b9a0fe9d76ad957bf.png'
        },
        {
            title: 'Direct Payment App',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis placerat arcu nibh sed.',
            icon: 'https://www.leadmarketingstrategies.com/wp-content/uploads/2022/08/Mobile-Optimization-for-Banks-Marketing.jpg.webp'
        }
    ];
}
