import '@emotion/react';
import type { CustomTheme } from '../styles/global';

declare module '@emotion/react' {
  interface Theme extends CustomTheme {}
}
