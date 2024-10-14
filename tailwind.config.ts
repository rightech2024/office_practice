import { YekanBakh } from '@/utils/customFont';
import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    container: {
      center: true,
      padding: "2rem",
      /* screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      }, */
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-faNum)","var(--font-yekanBakh)", ...fontFamily.sans],
        YekanBakh: ["var(--font-yekanBakh)"],
      },
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        textBase: "var(--color-text-base)",
        bgPrimary: "var(--color-bg-primary)",
        oxford_blue: {
          DEFAULT: "#01143D",
          100: "#00040c",
          200: "#000818",
          300: "#010c24",
          400: "#011030",
          500: "#01143d",
          600: "#023195",
          700: "#044eed",
          800: "#4e85fc",
          900: "#a7c2fe",
        },
        cadet_gray: {
          DEFAULT: "#99A0B0",
          100: "#1d1f25",
          200: "#3a3f4b",
          300: "#575e70",
          400: "#757e95",
          500: "#99a0b0",
          600: "#aeb4c1",
          700: "#c2c7d0",
          800: "#d7d9e0",
          900: "#ebecef",
        },
        mint_green: {
          DEFAULT: "#C1DDDA",
          100: "#1d3533",
          200: "#3b6b66",
          300: "#58a099",
          400: "#8bbfba",
          500: "#c1ddda",
          600: "#cde3e1",
          700: "#d9eae9",
          800: "#e6f1f0",
          900: "#f2f8f8",
        },
        french_gray: {
          DEFAULT: "#D2D5DB",
          100: "#262930",
          200: "#4c535f",
          300: "#737c8e",
          400: "#a2a8b5",
          500: "#d2d5db",
          600: "#dbdde2",
          700: "#e4e6e9",
          800: "#edeef0",
          900: "#f6f7f8",
        },
        space_cadet: {
          DEFAULT: "#30374D",
          100: "#0a0b10",
          200: "#14161f",
          300: "#1d222f",
          400: "#272d3f",
          500: "#30374d",
          600: "#4f597d",
          700: "#727ea7",
          800: "#a1a9c4",
          900: "#d0d4e2",
        },
        oxford_blue_three: {
          DEFAULT: "#061233",
          100: "#01040a",
          200: "#020714",
          300: "#040b1e",
          400: "#050e28",
          500: "#061233",
          600: "#0f2e83",
          700: "#194bd5",
          800: "#5d83ec",
          900: "#aec1f5",
        },
        platinum: {
          DEFAULT: "#D7D7DA",
          100: "#2a2a2d",
          200: "#53535a",
          300: "#7d7d87",
          400: "#aaaab1",
          500: "#d7d7da",
          600: "#dfdfe2",
          700: "#e7e7e9",
          800: "#efeff0",
          900: "#f7f7f8",
        },
        platinum_two: {
          DEFAULT: "#D9D9D9",
          100: "#2b2b2b",
          200: "#575757",
          300: "#828282",
          400: "#adadad",
          500: "#d9d9d9",
          600: "#e0e0e0",
          700: "#e8e8e8",
          800: "#f0f0f0",
          900: "#f7f7f7",
        },
        oxford_blue_two: {
          DEFAULT: "#0C1736",
          100: "#02050b",
          200: "#050916",
          300: "#070e21",
          400: "#0a132b",
          500: "#0c1736",
          600: "#1c367f",
          700: "#2c55c8",
          800: "#6d8cdf",
          900: "#b6c5ef",
        },
        cool_gray: {
          DEFAULT: "#7B7F97",
          100: "#18191f",
          200: "#30323e",
          300: "#494c5d",
          400: "#61657b",
          500: "#7b7f97",
          600: "#9699ac",
          700: "#b0b3c1",
          800: "#caccd6",
          900: "#e5e6ea",
        },
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // dark mode
        'dark-tremor': {
          brand: {
            faint: '#0B1229',
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[400],
            inverted: colors.blue[950],
          },
          background: {
            muted: '#131A2B',
            subtle: colors.gray[800],
            DEFAULT: colors.gray[900],
            emphasis: colors.gray[300],
          },
          border: {
            DEFAULT: colors.gray[800],
          },
          ring: {
            DEFAULT: colors.gray[800],
          },
          content: {
            subtle: colors.gray[600],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[200],
            strong: colors.gray[50],
            inverted: colors.gray[950],
          },
        },
      },
      boxShadow: {
        // light
        'tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'tremor-card':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'tremor-dropdown':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        'dark-tremor-input': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'dark-tremor-card':
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'dark-tremor-dropdown':
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'tremor-small': '0.375rem',
        'tremor-default': '0.5rem',
        'tremor-full': '9999px',
      },
      fontSize: {
        'tremor-label': ['0.75rem', { lineHeight: '1rem' }],
        'tremor-default': ['0.875rem', { lineHeight: '1.25rem' }],
        'tremor-title': ['1.125rem', { lineHeight: '1.75rem' }],
        'tremor-metric': ['1.875rem', { lineHeight: '2.25rem' }],
      },
      gridTemplateColumns: {
        20:"repeat(20, minmax(0,1fr))",
      },
    },
    animation: {
      'border-spin': 'border-spin 7s linear infinite',
    },
  },
  darkMode: ["class"],
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("tailwindcss-animate"), require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
};
export default config;
