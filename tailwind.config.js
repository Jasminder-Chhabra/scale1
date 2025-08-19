// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Scan App Router files
      "./components/**/*.{js,ts,jsx,tsx}", // Scan component files
    ],
    theme: {
     extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
         rainbow: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 0%' },
        },
                aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%", 
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
                aurora: "aurora 60s linear infinite",

      },
      animation: {
        rainbow: 'rainbow 3s linear infinite',
      },
    },
    },
    plugins: [addVariablesForColors],
  };

  function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
