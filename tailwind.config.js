module.exports = {
   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
   darkMode: false,
   theme: {
      extend: {
         fontFamily: {
            body: ["Poppins", "sans-serif"],
            heading: ["Montserrat", "sans-serif"],
         },
         zIndex: {
            "-1": "-1",
         },

         colors: {
            primary: {
               50: "#4d585e",
               100: "#434e54",
               200: "#39444a",
               300: "#2f3a40",
               400: "#253036",
               500: "#1b262c",
               600: "#111c22",
               700: "#071218",
               800: "#00080e",
               900: "#000004",
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
}
