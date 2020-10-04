/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var app = document.getElementById("app");
		this.supprimerModif();
		this.supprimerLinkback();
		this.supprimerReference();
		this.supprimerElements(".mw-cite-backlink");
		this.supprimerElements("#toc");
		this.supprimerElements(".navbar");
		this.reglerA();
		this.centrerImage();
		// this.marquerElements("p");
	}
	static centrerImage() {
		var divImages = document.querySelector("div.images");
		divImages.style.textAlign = "center";
	}
	static marquerElements(selecteur) {
		var elements = Array.from(document.querySelectorAll(selecteur));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].style.border = "5px dotted red";
		}

	}
	static reglerA_zzz() {
		var elements = Array.from(document.querySelectorAll("a[href^='/']"));
		for (let i = 0; i < elements.length; i += 1) {
			var href = elements[i].getAttribute("href");
			elements[i].href = "https://fr.wikipedia.org" + href;
			elements[i].target = "_blank";
		}
	}
	static reglerA() {
		var elements = Array.from(document.querySelectorAll("a"));
		console.log("avant", elements.length);
		elements = elements.filter((el) => {
			var href = el.getAttribute("href");
			if (href[0] === "/") {
				return true;
			}
		});
		console.log("apres", elements.length);
		elements.forEach(el => {
			var href = el.getAttribute("href");
			el.href = "https://fr.wikipedia.org" + href;
			el.target = "_blank";
		});

	}
	static supprimerElements(selecteur) {
		var elements = Array.from(document.querySelectorAll(selecteur));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].parentNode.removeChild(elements[i]);
		}
		console.log("suppression", selecteur, elements.length)
	}
	static supprimerReference() {
		var elements = Array.from(document.querySelectorAll("sup.reference"));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].parentNode.removeChild(elements[i]);
		}
	}
	static supprimerLinkback() {
		var elements = Array.from(document.querySelectorAll(".noprint.wikidata-linkback"));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].parentNode.removeChild(elements[i]);
		}
	}
	static supprimerModif() {
		var mods = Array.from(document.querySelectorAll(".mw-editsection"));
		for (let i = 0; i < mods.length; i += 1) {
			mods[i].parentNode.removeChild(mods[i]);
		}
		
	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
