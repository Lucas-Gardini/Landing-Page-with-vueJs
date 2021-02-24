const vue = new Vue({
	el: "#main",
	data() {
		return {
			// Language area
			home: "HOME",
			services: "SERVICES",
			works: "WORKS",
			about: "ABOUT",
			contact: "CONTACT",
			// Variables
			responsive_mode: "desktop",
			hamburger: "hamburger hamburger--spin",
			active_mobile_nav: "mobile-nav",
			page: "home",
		};
	},
	methods: {
		changeLanguage(language) {
			switch (language) {
				case "pt":
					this.home = "INÍCIO";
					this.services = "SERVIÇOS";
					this.works = "TRABALHOS";
					this.about = "SOBRE";
					this.contact = "CONTATO";
					break;
				case "en":
					this.home = "HOME";
					this.services = "SERVICES";
					this.works = "WORKS";
					this.about = "ABOUT";
					this.contact = "CONTACT";
					break;
			}
		},
		makeResponsive() {
			if (window.innerWidth < 1050 || (window.innerHeight < 581 && this.responsive_mode === "desktop")) {
				this.responsive_mode = "mobile";
			} else {
				this.responsive_mode = "desktop";
				this.hamburger = "hamburger hamburger--spin";
				this.active_mobile_nav = "mobile-nav";
			}
		},
		toogleNav() {
			if (!this.hamburger.includes("is-active")) {
				this.hamburger = "hamburger hamburger--spin is-active";
				document.getElementById("mySidenav").style.width = "250px";
			} else {
				this.hamburger = "hamburger hamburger--spin";
				document.getElementById("mySidenav").style.width = "0";
			}
		},
	},
	beforeMount() {
		this.makeResponsive();
	},
	mounted() {
		window.addEventListener("resize", this.makeResponsive);
	},
});
