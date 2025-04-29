# ngx-click-copy

[![npm version](https://img.shields.io/npm/v/ngx-click-copy)](https://www.npmjs.com/package/ngx-click-copy)
[![npm downloads](https://img.shields.io/npm/dm/ngx-click-copy)](https://www.npmjs.com/package/ngx-click-copy)
[![license](https://img.shields.io/npm/l/ngx-click-copy)](https://github.com/prodriguezr/angular-ngx-click-copy/blob/main/LICENSE)

🚀 Standalone Angular library for copying content to the clipboard with optional visual feedback.

---

## ✨ Features

- Compatible with Angular `>=17.0.0`
- Uses **Standalone Components** and **Signals**
- Leverages the **new control flow syntax** (`@if`)
- **Automatic i18n support** (`es`, `en`) or manual via `[locale]`
- Customizable with **CSS variables** for colors, position, font, etc.
- Supports both **custom feedback templates** and default messages ("¡Copiado!" / "Copied!")
- Zero external dependencies
- Ultra-lightweight

---

## 📦 Installation

```bash
npm install ngx-click-copy
```

---

## 🚀 Basic Usage

```ts
import { NgxClickCopyComponent, CopyFeedbackComponent } from 'ngx-click-copy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxClickCopyComponent, CopyFeedbackComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

```html
<ngx-click-copy [copyText]="'npm install ngx-click-copy'" [showFeedback]="true">
  <pre>npm install ngx-click-copy</pre>

  <ngx-click-copy-feedback>
    <div>Text copied to clipboard!</div>
  </ngx-click-copy-feedback>
</ngx-click-copy>
```

---

## ⚙️ Available Inputs

| Input              | Type                       | Default  | Description                                                        |
|--------------------|----------------------------|----------|--------------------------------------------------------------------|
| `copyText`         | `string`                   | `''`     | Explicit text to copy. If not set, copies the inner content.       |
| `showFeedback`     | `boolean`                  | `true`   | Whether to show visual feedback.                                   |
| `feedbackDuration` | `number`                   | `2000`   | Duration (in ms) to show feedback.                                 |
| `feedbackMessage`  | `string`                   | `''`     | Custom feedback text (only if no template provided).               |
| `locale`           | `'auto' | 'es' | 'en'`      | `'auto'` | Auto-detect browser language or override manually.                 |

---

## 🧩 Feedback Priority

| Situation                          | What is shown          |
|------------------------------------|-------------------------|
| `<ngx-click-copy-feedback>` exists | Projected template      |
| `feedbackMessage` is set           | Custom text             |
| Neither                            | Auto message by locale  |

---

## 🎨 CSS Variables for Styling

| CSS Variable                                | Default              | Description                            |
|---------------------------------------------|----------------------|----------------------------------------|
| `--ngx-click-copy-feedback-background`     | `black`               | Background color of feedback bubble   |
| `--ngx-click-copy-feedback-color`           | `white`               | Text color                             |
| `--ngx-click-copy-feedback-padding`         | `0.5rem 1rem`         | Padding                                |
| `--ngx-click-copy-feedback-border-radius`   | `0.375rem`            | Rounded corners                        |
| `--ngx-click-copy-feedback-font-family`     | `inherit`             | Font family (inherits from app)        |
| `--ngx-click-copy-feedback-top`             | `0.5rem`              | Top position                           |
| `--ngx-click-copy-feedback-right`           | `0.5rem`              | Right position                         |
| `--ngx-click-copy-feedback-bottom`          | `auto`                | Bottom position                        |
| `--ngx-click-copy-feedback-left`            | `auto`                | Left position                          |

---

## 🧪 Example: CSS Customization

```html
<div style="
  --ngx-click-copy-feedback-top: auto;
  --ngx-click-copy-feedback-bottom: 1rem;
  --ngx-click-copy-feedback-left: 1rem;
  --ngx-click-copy-feedback-right: auto;
  --ngx-click-copy-feedback-font-family: 'Fira Code', monospace;
">
  <ngx-click-copy [copyText]="'echo hello'" [showFeedback]="true">
    <pre>echo hello</pre>
  </ngx-click-copy>
</div>
```

---

## 🧠 Requirements

- Angular 17 or newer
- Browser with `navigator.clipboard` support

---

## 📜 License

MIT © 2025 - Pablo Andrés Rodríguez R.

---

## 🌐 Online Demo

👉 (Pending StackBlitz demo link)

---

## 🇪🇸 Versión en Español

--- 
(Sección en español comenzaría aquí, similar a la anterior)

