/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gabarito', 'Helvetica', 'sans-serif'],
        mono: ['DM Mono', 'Courier', 'monospace']
      },
      boxShadow: {
        'inner-lg': 'inset 0 4px 8px rgba(0, 0, 0, 0.1)',
        'inner-xl': 'inset 0 8px 16px rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: [
    createThemes({
      memoranda: {
        primary: {
          dark: '#cbcb37',
          DEFAULT: '#fcfc64',
          light: '#ffffad',
        },
        background: {
          dark: '#1c1b29',
          DEFAULT: '#2d2a40',
          light: '#3e3b58'
        },
        body: {
          dark: '#5a5678',
          DEFAULT: '#d5d6d7',
          light: '#ffffff'
        },
        color: {
          purple: {
            dark: '#551891',
            DEFAULT: '#7b4aac'
          },
          blue: {
            dark: '#157a9f',
            DEFAULT: '#4accd0'
          },
          green: {
            dark: '#155210',
            DEFAULT: '#30a423'
          },
          orange: {
            dark: '#b65b18',
            DEFAULT: '#ffa01a'
          },
          red: {
            dark: '#911201',
            DEFAULT: '#ff3628'
          },
          pink: {
            dark: '#861f6a',
            DEFAULT: '#eb42d3'
          }
        }
      }
    })
  ]
}
