# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-12-19

### ✨ Added

- **Multiple Size Variants**: Added `sm`, `md`, `lg`, `xl`, and `full` size options
  - Small (24rem): Compact modals for quick confirmations
  - Medium (28rem): Standard size for most use cases
  - Large (32rem): More space for detailed content
  - Extra Large (36rem): Large modals for complex forms
  - Full (90vw): Full-screen immersive experiences
- **Position Variants**: Added positioning options (`center`, `top`, `bottom`, `left`, `right`)
- **Backdrop Variants**: Added backdrop styles (`blur`, `transparent`, `solid`) with customizable opacity
- **Loading States**: Built-in loading spinners and disabled states for async operations
- **Custom Content Support**: Full support for custom headers, footers, and content
- **Enhanced Accessibility**: WCAG 2.1 AA compliance with proper ARIA attributes
- **Dark Mode Support**: Automatic dark mode using `prefers-color-scheme`
- **Reduced Motion Support**: Respects user's motion preferences
- **TypeScript Support**: Full TypeScript definitions and support
- **React 19 Compatibility**: Upgraded to work with React 19

### 🎨 Enhanced

- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Animations**: Smooth CSS-based animations with proper easing
- **Focus Management**: Automatic focus trapping and restoration
- **Keyboard Navigation**: Full keyboard support (Tab, Escape, Enter)
- **Visual Design**: Modern, clean UI with improved spacing and typography
- **Icon System**: Enhanced icon display with better sizing and positioning

### 🔧 Improved

- **Build System**: Optimized Rollup configuration for better tree-shaking
- **CSS Architecture**: Better CSS organization with custom properties
- **Performance**: Optimized rendering and reduced bundle size
- **Error Handling**: Better error handling for async operations
- **Documentation**: Comprehensive API documentation and examples

### 🐛 Fixed

- **Opacity Issues**: Fixed modal panel opacity not displaying properly
- **Size Variants**: Fixed size classes not being applied correctly
- **CSS Specificity**: Resolved CSS conflicts that prevented proper styling
- **Animation Timing**: Fixed animation duration and easing issues
- **Focus Issues**: Fixed focus management in various scenarios

### 📚 Documentation

- **API Reference**: Complete prop documentation with types and examples
- **Storybook**: Enhanced Storybook with all variants and examples
- **README**: Comprehensive documentation with installation and usage guides
- **Examples**: Added practical examples for all features
- **Accessibility Guide**: Added accessibility best practices

### 🏗️ Technical

- **Dependencies**: Updated all dependencies to latest versions
- **Build Process**: Added `prepublishOnly` script for automatic builds
- **Package.json**: Enhanced package metadata and keywords
- **ESLint**: Improved linting configuration
- **TypeScript**: Added TypeScript support and definitions

## [1.0.3] - 2024-12-18

### 🐛 Fixed

- Fixed opacity issues in modal display
- Improved build configuration
- Updated dependencies

### 🔧 Improved

- Enhanced error handling
- Better CSS organization

## [1.0.2] - 2024-12-17

### 🐛 Fixed

- Fixed useEffectEvent compatibility issues with React 19
- Resolved build errors

### 🔧 Improved

- Updated to use useCallback for event handlers
- Enhanced build configuration

## [1.0.1] - 2024-12-16

### 🐛 Fixed

- Fixed Storybook configuration issues
- Resolved missing dependencies

### 🔧 Improved

- Added proper Babel configuration
- Enhanced webpack configuration for Storybook

## [1.0.0] - 2024-12-15

### ✨ Initial Release

- Basic modal component with success, warning, error, and info variants
- Simple API with title, description, and action buttons
- Basic styling and animations
- React 19 compatibility
- Storybook integration

---

## Migration Guide

### From v1.x to v2.0.0

#### Breaking Changes

- **Size Prop**: The `size` prop now defaults to `'md'` instead of being undefined
- **CSS Classes**: Some CSS class names have been updated for better organization
- **Animation Timing**: Animation durations have been standardized to 0.3s

#### New Features

- **Size Variants**: Add `size="lg"` for larger modals
- **Positioning**: Use `position="top"` for top-positioned modals
- **Backdrop Options**: Use `backdrop="blur"` for blurred backdrop
- **Loading States**: Add `loading={true}` for loading states
- **Custom Content**: Use `customHeader` and `customFooter` props

#### Example Migration

**Before (v1.x):**

```jsx
<DialogModal title="Success!" description="Operation completed" confirm="OK" />
```

**After (v2.0.0):**

```jsx
<DialogModal
  size="md"
  position="center"
  backdrop="blur"
  title="Success!"
  description="Operation completed"
  confirm="OK"
  hasCancel={false}
/>
```

#### CSS Customization

If you were customizing CSS, you may need to update selectors:

**Before:**

```css
.dialog--sm .dialog--panel {
  /* styles */
}
```

**After:**

```css
.dialog--container.dialog--sm .dialog--panel {
  /* styles */
}
```
