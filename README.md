# React Dialog Confirm v2.0.0

A modern, accessible React modal component library with multiple variants, animations, and enhanced features. Perfect for alerts, confirmations, and custom dialogs.

![React Dialog Confirm](https://img.shields.io/badge/React-19.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-2.0.0-orange)
![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-brightgreen)

## ✨ Features

- 🎨 **Multiple Size Variants**: Small, Medium, Large, Extra Large, and Full Screen
- 📍 **Flexible Positioning**: Center, Top, Bottom, Left, Right
- 🌟 **Backdrop Variants**: Blur, Transparent, Solid with customizable opacity
- ⚡ **Loading States**: Built-in loading spinners and disabled states
- ♿ **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes
- 🎭 **Custom Content**: Support for custom headers, footers, and content
- 📱 **Responsive Design**: Mobile-first approach with touch-friendly interactions
- 🌙 **Dark Mode**: Automatic dark mode support
- 🎬 **Smooth Animations**: CSS-based animations with reduced motion support
- 🔧 **TypeScript Ready**: Full TypeScript support
- ⚛️ **React 19 Compatible**: Built for the latest React version

## 🚀 Quick Start

### Installation

```bash
npm install react-dialog-confirm@^2.0.0
```

### Basic Usage

```jsx
import React from "react";
import { DialogModal, DialogProvider, useModal } from "react-dialog-confirm";

function App() {
  const { openModal } = useModal();

  const handleShowModal = () => {
    openModal(
      <DialogModal
        icon="success"
        title="Success!"
        description="Your action was completed successfully."
        confirm="Continue"
        hasCancel={true}
        cancel="Go Back"
        onConfirm={() => console.log("Confirmed!")}
        onCancel={() => console.log("Cancelled!")}
      />
    );
  };

  return (
    <DialogProvider>
      <button onClick={handleShowModal}>Show Modal</button>
    </DialogProvider>
  );
}
```

## 📚 API Reference

### DialogModal Props

| Prop                   | Type                                                 | Default    | Description             |
| ---------------------- | ---------------------------------------------------- | ---------- | ----------------------- |
| `icon`                 | `'success' \| 'warning' \| 'error' \| 'info'`        | -          | Icon to display         |
| `title`                | `string`                                             | -          | Modal title             |
| `description`          | `string`                                             | -          | Modal description       |
| `confirm`              | `string`                                             | `'OK'`     | Confirm button text     |
| `cancel`               | `string`                                             | `'Cancel'` | Cancel button text      |
| `hasCancel`            | `boolean`                                            | `false`    | Show cancel button      |
| `onConfirm`            | `function`                                           | -          | Confirm button handler  |
| `onCancel`             | `function`                                           | -          | Cancel button handler   |
| `size`                 | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'`             | `'md'`     | Modal size              |
| `position`             | `'center' \| 'top' \| 'bottom' \| 'left' \| 'right'` | `'center'` | Modal position          |
| `backdrop`             | `'blur' \| 'transparent' \| 'solid'`                 | `'blur'`   | Backdrop style          |
| `backdropOpacity`      | `number`                                             | `0.5`      | Backdrop opacity        |
| `closeOnBackdropClick` | `boolean`                                            | `true`     | Close on backdrop click |
| `closeOnEscape`        | `boolean`                                            | `true`     | Close on escape key     |
| `showCloseButton`      | `boolean`                                            | `true`     | Show close button       |
| `loading`              | `boolean`                                            | `false`    | Show loading state      |
| `disabled`             | `boolean`                                            | `false`    | Disable interactions    |
| `customHeader`         | `ReactNode`                                          | -          | Custom header component |
| `customFooter`         | `ReactNode`                                          | -          | Custom footer component |
| `children`             | `ReactNode`                                          | -          | Custom content          |
| `className`            | `string`                                             | -          | Additional CSS classes  |
| `style`                | `object`                                             | -          | Inline styles           |

### DialogProvider Props

| Prop       | Type        | Description      |
| ---------- | ----------- | ---------------- |
| `children` | `ReactNode` | Child components |

### useModal Hook

Returns an object with:

| Property      | Type       | Description             |
| ------------- | ---------- | ----------------------- |
| `isModalOpen` | `boolean`  | Whether modal is open   |
| `openModal`   | `function` | Open modal with content |
| `closeModal`  | `function` | Close modal             |

## 🎨 Examples

### Size Variants

```jsx
// Small modal for quick confirmations
<DialogModal
  size="sm"
  title="Quick Confirm"
  description="Are you sure you want to proceed?"
  confirm="Yes"
  hasCancel={true}
/>

// Large modal for detailed content
<DialogModal
  size="lg"
  title="Detailed Information"
  description="This modal has more space for content."
  confirm="Got it"
  hasCancel={true}
/>

// Full screen modal for immersive experiences
<DialogModal
  size="full"
  title="Full Screen Experience"
  description="This modal takes up the entire screen."
  confirm="Close"
  hasCancel={true}
/>
```

### Position Variants

```jsx
// Top positioned modal
<DialogModal
  position="top"
  title="Top Modal"
  description="This modal appears at the top of the screen."
  confirm="OK"
/>

// Bottom positioned modal
<DialogModal
  position="bottom"
  title="Bottom Modal"
  description="This modal appears at the bottom of the screen."
  confirm="OK"
/>
```

### Backdrop Variants

```jsx
// Blur backdrop (default)
<DialogModal
  backdrop="blur"
  backdropOpacity={0.3}
  title="Blur Effect"
  description="This modal has a blurred backdrop."
  confirm="OK"
/>

// Transparent backdrop
<DialogModal
  backdrop="transparent"
  title="Transparent Backdrop"
  description="This modal has a transparent backdrop."
  confirm="OK"
/>
```

### Loading States

```jsx
<DialogModal
  loading={true}
  title="Processing..."
  description="Please wait while we process your request."
  confirm="Cancel"
  onConfirm={() => handleCancel()}
/>
```

### Custom Content

```jsx
<DialogModal
  title="Custom Modal"
  customHeader={
    <div style={{ padding: "1rem", background: "#f0f0f0" }}>
      <h2>Custom Header</h2>
    </div>
  }
  customFooter={
    <div style={{ padding: "1rem", background: "#f0f0f0" }}>
      <button onClick={() => console.log("Custom action")}>
        Custom Action
      </button>
    </div>
  }
>
  <div style={{ padding: "2rem" }}>
    <p>This is custom content inside the modal.</p>
    <input type="text" placeholder="Enter some text" />
  </div>
</DialogModal>
```

### Async Actions

```jsx
const handleAsyncAction = async () => {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Async action completed!");
};

<DialogModal
  title="Async Action"
  description="This will perform an async operation."
  confirm="Start"
  onConfirm={handleAsyncAction}
  hasCancel={true}
/>;
```

## 🎨 Styling

The component uses CSS custom properties for easy theming:

```css
:root {
  --primary-600: #2563eb; /* Primary button color */
  --gray-100: #f3f4f6; /* Cancel button background */
  --gray-600: #4b5563; /* Cancel button text */
  --radius-lg: 0.5rem; /* Border radius */
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25); /* Shadow */
}
```

### Size Specifications

| Size   | Max Width | Padding | Title Font | Description Font |
| ------ | --------- | ------- | ---------- | ---------------- |
| `sm`   | 24rem     | 1.25rem | 1.125rem   | 0.8125rem        |
| `md`   | 28rem     | 1.5rem  | 1.25rem    | 0.875rem         |
| `lg`   | 32rem     | 2rem    | 1.5rem     | 1rem             |
| `xl`   | 36rem     | 2.5rem  | 1.75rem    | 1.125rem         |
| `full` | 90vw      | 3rem    | 2rem       | 1.25rem          |

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support with Tab, Escape, and Enter keys
- **Screen Readers**: Proper ARIA labels and descriptions
- **Focus Management**: Automatic focus trapping and restoration
- **Reduced Motion**: Respects `prefers-reduced-motion` media query
- **High Contrast**: Compatible with high contrast mode
- **WCAG 2.1 AA**: Meets accessibility standards

## 📱 Responsive Design

The modal automatically adapts to different screen sizes:

- **Mobile**: Full-width modals with stacked buttons
- **Tablet**: Optimized spacing and touch targets
- **Desktop**: Centered modals with side-by-side buttons

## 🌙 Dark Mode

Automatic dark mode support using `prefers-color-scheme`:

```css
@media (prefers-color-scheme: dark) {
  .dialog--card {
    background-color: var(--gray-800);
    color: var(--gray-100);
  }
}
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
git clone https://github.com/veera-selvam-s/react-dialog-confirm.git
cd react-dialog-confirm
npm install
```

### Available Scripts

```bash
npm run build          # Build the library
npm run storybook      # Start Storybook development server
npm run build-storybook # Build Storybook for production
npm run lint           # Run ESLint
```

### Storybook

View all components and variants:

```bash
npm run storybook
```

Then open [http://localhost:6006](http://localhost:6006)

## 📦 Distribution

The library is built using Rollup and includes:

- **CommonJS**: `dist/index.js`
- **ES Modules**: `dist/index.es.js`
- **CSS**: Included in the bundle

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆕 Changelog

### v2.0.0

- ✨ Added multiple size variants (sm, md, lg, xl, full)
- 🎨 Added position variants (center, top, bottom, left, right)
- 🌟 Added backdrop variants (blur, transparent, solid)
- ⚡ Added loading states and disabled states
- ♿ Improved accessibility with ARIA attributes
- 📱 Enhanced responsive design
- 🌙 Added dark mode support
- 🎬 Improved animations and transitions
- ⚛️ Upgraded to React 19 compatibility
- 🔧 Added TypeScript support
- 📚 Comprehensive documentation and examples

### v1.0.3

- 🐛 Fixed opacity issues in modal display
- 🔧 Improved build configuration
- 📦 Updated dependencies

## 📞 Support

- 📧 Email: [your-email@example.com]
- 🐛 Issues: [GitHub Issues](https://github.com/veera-selvam-s/react-dialog-confirm/issues)
- 📖 Documentation: [Storybook](https://react-dialog-confirm.netlify.app)

---

Made with ❤️ by [veera selvam](https://github.com/veera-selvam-s)
