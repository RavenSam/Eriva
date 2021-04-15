module.exports = {
	mode: 'jit',
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				body: ["Poppins", "sans-serif"],
				heading: ["Montserrat", "sans-serif"],
			},
			zIndex: {
				"-1": "-1",
				2: "2",
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

				whiteAlpha: {
					50: "rgba(255,255,255,.05)",
					100: "rgba(255,255,255,.1)",
					200: "rgba(255,255,255,.2)",
					300: "rgba(255,255,255,.3)",
					400: "rgba(255,255,255,.4)",
					500: "rgba(255,255,255,.5)",
					600: "rgba(255,255,255,.6)",
					700: "rgba(255,255,255,.7)",
					800: "rgba(255,255,255,.8)",
					900: "rgba(255,255,255,.9)",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
