import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { StickyHeaderComponent } from '../sticky-header/sticky-header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-whats-new',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StickyHeaderComponent, FooterComponent],
  templateUrl: './whats-new.component.html',
  styleUrl: './whats-new.component.css'
})
export class WhatsNewComponent {

}
