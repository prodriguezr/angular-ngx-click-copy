# ngx-click-copy

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
import { NgxClickCopyComponent, CopyFeedbackComponent } from "ngx-click-copy";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgxClickCopyComponent, CopyFeedbackComponent],
  templateUrl: "./app.component.html",
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

| Input              | Type      | Default | Description                                                     |
| ------------------ | --------- | ------- | --------------------------------------------------------------- | -------- | ----------------------------------------------------------------- |
| `copyText`         | `string`  | `''`    | Explicit text to copy. If not set, it copies the inner content. |
| `showFeedback`     | `boolean` | `true`  | Whether to show visual feedback.                                |
| `feedbackDuration` | `number`  | `2000`  | Duration in milliseconds to show feedback.                      |
| `feedbackMessage`  | `string`  | `''`    | Custom feedback text (used only if no template is provided).    |
| `locale`           | `'auto'   | 'es'    | 'en'`                                                           | `'auto'` | Automatically detects browser language or allows manual override. |

---

## 🧩 Feedback Priority

| Situation                          | What is shown                |
| ---------------------------------- | ---------------------------- |
| `<ngx-click-copy-feedback>` exists | The projected template       |
| `feedbackMessage` is set           | The custom text              |
| Neither                            | Auto message based on locale |

---

## 🎨 CSS Variables for Styling

| CSS Variable                              | Default       | Description                          |
| ----------------------------------------- | ------------- | ------------------------------------ |
| `--ngx-click-copy-feedback-background`    | `black`       | Background color of feedback bubble  |
| `--ngx-click-copy-feedback-color`         | `white`       | Text color                           |
| `--ngx-click-copy-feedback-padding`       | `0.5rem 1rem` | Padding                              |
| `--ngx-click-copy-feedback-border-radius` | `0.375rem`    | Rounded corners                      |
| `--ngx-click-copy-feedback-font-family`   | `inherit`     | Font family (defaults to app's font) |
| `--ngx-click-copy-feedback-top`           | `0.5rem`      | Top position                         |
| `--ngx-click-copy-feedback-right`         | `0.5rem`      | Right position                       |
| `--ngx-click-copy-feedback-bottom`        | `auto`        | Bottom position                      |
| `--ngx-click-copy-feedback-left`          | `auto`        | Left position                        |

---

## 🧪 CSS Customization Example

```html
<div
  style="
  --ngx-click-copy-feedback-top: auto;
  --ngx-click-copy-feedback-bottom: 1rem;
  --ngx-click-copy-feedback-left: 1rem;
  --ngx-click-copy-feedback-right: auto;
  --ngx-click-copy-feedback-font-family: 'Fira Code', monospace;
"
>
  <ngx-click-copy [copyText]="'echo hello'" [showFeedback]="true">
    <pre>echo hello</pre>
  </ngx-click-copy>
</div>
```

---

## 🧠 Requirements

- Angular 17 or newer
- A browser that supports `navigator.clipboard`

---

## 📜 License

MIT © 2025 - Pablo Andrés Rodríguez R.

---

## 🌐 Online Demo

## 👉 (Pending: add StackBlitz or other live demo link)

# ngx-click-copy

🚀 Librería Angular standalone para copiar contenido al portapapeles con feedback visual opcional.

---

## ✨ Características

- Compatible Angular `>=17.0.0`
- Usa **Standalone Components** y **Signals**
- Usa el **nuevo control de flujo** (`@if`)
- **Internacionalización automática** (`es`, `en`) o manual con `[locale]`
- **Variables CSS** para personalizar colores, posición, fuente y estilos
- **Feedback customizado** o texto por defecto ("¡Copiado!" / "Copied!")
- Sin dependencias externas
- Tamaño ultraliviano

---

## 📦 Instalación

```bash
npm install ngx-click-copy
```

---

## 🚀 Uso básico

```ts
import { NgxClickCopyComponent, CopyFeedbackComponent } from "ngx-click-copy";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgxClickCopyComponent, CopyFeedbackComponent],
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

```html
<ngx-click-copy [copyText]="'npm install ngx-click-copy'" [showFeedback]="true">
  <pre>npm install ngx-click-copy</pre>

  <ngx-click-copy-feedback>
    <div>¡Texto copiado al portapapeles!</div>
  </ngx-click-copy-feedback>
</ngx-click-copy>
```

---

## ⚙️ Inputs disponibles

| Input              | Tipo      | Default | Descripción                                                                 |
| ------------------ | --------- | ------- | --------------------------------------------------------------------------- | -------- | ----------------------------------------------------- |
| `copyText`         | `string`  | `''`    | Texto explícito a copiar. Si no se define, se copiará el contenido interno. |
| `showFeedback`     | `boolean` | `true`  | Si se debe mostrar el feedback visual.                                      |
| `feedbackDuration` | `number`  | `2000`  | Tiempo en milisegundos que se muestra el feedback.                          |
| `feedbackMessage`  | `string`  | `''`    | Texto personalizado de feedback (si no se usa template).                    |
| `locale`           | `'auto'   | 'es'    | 'en'`                                                                       | `'auto'` | Detecta idioma desde el navegador o permite forzarlo. |

---

## 🧩 Prioridad del feedback

| Situación                         | Qué se muestra             |
| --------------------------------- | -------------------------- |
| Tiene `<ngx-click-copy-feedback>` | Muestra el template        |
| Tiene `feedbackMessage` definido  | Muestra ese texto          |
| Ninguno de los anteriores         | Muestra mensaje por idioma |

---

## 🎨 Variables CSS personalizables

| Variable                                  | Default       | Descripción                           |
| ----------------------------------------- | ------------- | ------------------------------------- |
| `--ngx-click-copy-feedback-background`    | `black`       | Color de fondo del feedback           |
| `--ngx-click-copy-feedback-color`         | `white`       | Color del texto                       |
| `--ngx-click-copy-feedback-padding`       | `0.5rem 1rem` | Espaciado interno                     |
| `--ngx-click-copy-feedback-border-radius` | `0.375rem`    | Bordes redondeados                    |
| `--ngx-click-copy-feedback-font-family`   | `inherit`     | Fuente (usa la de la app por defecto) |
| `--ngx-click-copy-feedback-top`           | `0.5rem`      | Posición top                          |
| `--ngx-click-copy-feedback-right`         | `0.5rem`      | Posición right                        |
| `--ngx-click-copy-feedback-bottom`        | `auto`        | Posición bottom                       |
| `--ngx-click-copy-feedback-left`          | `auto`        | Posición left                         |

---

## 🧪 Ejemplo de personalización CSS

```html
<div
  style="
  --ngx-click-copy-feedback-top: auto;
  --ngx-click-copy-feedback-bottom: 1rem;
  --ngx-click-copy-feedback-left: 1rem;
  --ngx-click-copy-feedback-right: auto;
  --ngx-click-copy-feedback-font-family: 'Fira Code', monospace;
"
>
  <ngx-click-copy [copyText]="'echo hello'" [showFeedback]="true">
    <pre>echo hello</pre>
  </ngx-click-copy>
</div>
```

---

## 🧠 Requisitos

- Angular 17 o superior
- Navegador con soporte para `navigator.clipboard`

---

## 📜 Licencia

MIT © 2025 - Pablo Andrés Rodríguez R.

---

## 🌐 Demo online

👉 (Pendiente agregar StackBlitz o enlace de ejemplo)
