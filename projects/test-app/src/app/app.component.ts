import { Component } from '@angular/core';
import { NgxClickCopyComponent } from '@project/ngx-click-copy'; // así apuntamos a la librería local
import { CopyFeedbackComponent } from '@project/ngx-click-copy'; // para el feedback también

@Component({
  selector: 'app-root',
  imports: [NgxClickCopyComponent, CopyFeedbackComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'test-app';
}
