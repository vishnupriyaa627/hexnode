import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { WhatsNewComponent } from './whats-new/whats-new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StickyHeaderComponent, FooterComponent, WhatsNewComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hexnode';
  showWhatsNew = false;

  loadWhatsNew() {
    this.showWhatsNew = true;
  }

  loadOriginalContent() {
    this.showWhatsNew = false;
  }
}
