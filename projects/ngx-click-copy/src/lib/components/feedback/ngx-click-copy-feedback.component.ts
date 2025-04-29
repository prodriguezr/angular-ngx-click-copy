import { Component, signal } from '@angular/core';

@Component({
  selector: 'ngx-click-copy-feedback',
  standalone: true,
  templateUrl: './ngx-click-copy-feedback.component.html',
  styleUrls: ['./ngx-click-copy-feedback.component.css'],
})
export class CopyFeedbackComponent {
  private _visible = signal(false);

  get visible() {
    return this._visible();
  }

  show() {
    this._visible.set(true);
  }

  hide() {
    this._visible.set(false);
  }
}
