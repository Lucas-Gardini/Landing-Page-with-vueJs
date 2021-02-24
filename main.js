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
			title: "YOUR TITLE GOES HERE",
			welcome_text: "You can put a long text here to welcome visitors, or to describe your services, and etc",
			// Variables
			responsive_mode: "desktop",
			hamburger: "hamburger hamburger--spin",
			active_mobile_nav: "mobile-nav",
			page: "home",
			pop_up: "pop-up",
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
					this.title = "SEU TÍTULO VEM AQUI!";
					this.welcome_text =
						"Você pode colocar um texto longo aqui para dar as boas-vindas aos visitantes ou para descrever seus serviços, etc";
					this.pop_up = "pop-up";
					break;
				case "en":
					this.home = "HOME";
					this.services = "SERVICES";
					this.works = "WORKS";
					this.about = "ABOUT";
					this.contact = "CONTACT";
					this.title = "YOUR TITLE GOES HERE";
					this.welcome_text = "You can put a long text here to welcome visitors, or to describe your services, and etc";
					this.pop_up = "pop-up";
					break;
				default:
					this.pop_up = "pop-up active";
					break;
			}
		},
		makeResponsive() {
			if (window.innerWidth < 1050 || (window.innerHeight < 581 && this.responsive_mode === "desktop")) {
				this.responsive_mode = "mobile";
			} else {
				this.responsive_mode = "desktop";
				this.hamburger = "hamburger hamburger--spin";
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
		var language = 1;
		let ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				let data = JSON.parse(this.responseText);
				if (data.country == "Brazil" || data.country == "Portugal" || data.country == "Spain") {
					language = "pt";
					vue.changeLanguage(language);
				}
			}
		};
		console.log(language);
		ajax.open("GET", "http://ip-api.com/json", true);
		ajax.send();
		window.addEventListener("resize", this.makeResponsive);
	},
});
