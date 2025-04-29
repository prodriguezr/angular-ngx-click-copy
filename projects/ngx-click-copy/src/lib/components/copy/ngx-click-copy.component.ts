import {
  Component,
  ContentChild,
  ElementRef,
  input,
  Input,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CopyFeedbackComponent } from '../feedback/ngx-click-copy-feedback.component';

@Component({
  selector: 'ngx-click-copy',
  standalone: true,
  templateUrl: './ngx-click-copy.component.html',
  styleUrls: ['./ngx-click-copy.component.css'],
})
export class NgxClickCopyComponent {
  copyText = input<string>('');
  showFeedback = input<boolean>(true);
  feedbackDuration = input<number>(2000);
  feedbackMessage = input<string>('');
  locale = input<'es' | 'en' | 'auto'>('auto');

  @ViewChild('copyContainer', { static: true })
  copyContainer!: ElementRef<HTMLElement>;
  @ContentChild(CopyFeedbackComponent)
  feedbackComponent?: CopyFeedbackComponent;

  copied = signal(false);

  get defaultFeedbackMessage(): string {
    return this.detectLanguage();
  }

  copyToClipboard() {
    const text =
      this.copyText()?.trim() ||
      this.copyContainer.nativeElement.innerText.trim();

    if (!text) {
      console.warn('ngx-click-copy: No text to copy.');
      return;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.copied.set(true);

        // Si existe feedback visual, lo mostramos temporalmente
        if (this.showFeedback() && this.feedbackComponent) {
          this.feedbackComponent.show();
          setTimeout(
            () => this.feedbackComponent?.hide(),
            this.feedbackDuration()
          );
        } else if (this.showFeedback()) {
          // Caso simple: solo feedback interno del propio copy
          setTimeout(() => this.copied.set(false), this.feedbackDuration());
        }
      })
      .catch((err) => {
        console.error('ngx-click-copy: Failed to copy text.', err);
      });
  }

  private detectLanguage(): string {
    const lang =
      this.locale() === 'auto'
        ? navigator.language.toLowerCase()
        : this.locale();

    console.log('lang', lang);

    if (lang.startsWith('es')) {
      return '¡Copiado!';
    }
    return 'Copied!';
  }
}
