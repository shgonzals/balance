// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'cleanFintech',
    themes: {
      cleanFintech: {
        dark: false,
        colors: {
          primary: '#334155',
          secondary: '#C7D2E2',
          accent: '#93C5FD',
          background: '#F7F8FC',
          surface: '#FFFFFF',
          'on-primary': '#FFFFFF',
          'on-secondary': '#1E293B',
          'on-accent': '#0B3B74',
          'on-background': '#0F172A',
          'on-surface': '#0F172A',
          error: '#DC2626',
          info: '#4F46E5',
          success: '#059669',
          warning: '#D97706'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  }
})

export default vuetify
