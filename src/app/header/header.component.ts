import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() whatsNewClicked = new EventEmitter<void>();

  onWhatsNewClick(event: MouseEvent) {
    event.preventDefault();
    this.whatsNewClicked.emit(); // Emit event when clicked
  }
}
