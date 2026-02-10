// @flow
export default function generatePrefix(): string {
  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

  const prefixes = ['Moz', 'Webkit', 'O', 'ms'];
  const style = window.document.documentElement.style;

  // Check for unprefixed transform support first
  if ('transform' in style) {
    return '';
  }

  // Check for prefixed transform support
  for (let i = 0; i < prefixes.length; i++) {
    const prefixedProp = prefixes[i] + 'Transform';
    if (prefixedProp in style) {
      // Return the prefix with lowercase first letter for CSS property usage
      // e.g., 'Webkit' becomes 'webkit-'
      return '-' + prefixes[i].toLowerCase() + '-';
    }
  }
  
  return '';
}
