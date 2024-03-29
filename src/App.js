/**
 * Consignes
 * - Dans un premier temps, créer TOUTES les fonctions, qui ne font qu'un console.log de leur nom (ex: console.log("centrerImage");)
 * - Décommenter l'appel des fonctions dans le main
 * - Tester
 * - Créer la logique de chaque fonction
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		// On exécute le nettoyage lorsque l'usager clique sur le bouton "Nettoyer"
		document.getElementById("btnNettoyer").addEventListener("click", e => {
			this.supprimerModif();
			this.supprimerLinkback();
			this.supprimerReference();
			this.supprimerElements(".mw-cite-backlink");
			this.supprimerElements("#toc");
			this.supprimerElements(".navbar");
			this.reglerA();
			this.centrerImage();
			// this.marquerElements("p");
		})
	}
	/**
	 * Méthode centrerImage. Aligne au centre l'image qui se trouve dans le div ayant la classe "images"
	 * Niveau : facile
	 * @returns null Ne retourne rien
	 */
	static centrerImage() {
		var divImages = document.querySelector("div.images");
		divImages.style.textAlign = "center";
	}

	/**
	 * Méthode marquerElements. Encadre chaque élément correspondant au sélecteur donné.
	 * Le cadre est un pointillé rouge de 5 pixels
	 * Niveau : moyen
	 * @param {string} selecteur Le sélecteur des éléments à encadrer
	 * @returns null Ne retourne rien
	 */
	static marquerElements(selecteur) {
		var elements = Array.from(document.querySelectorAll(selecteur));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].style.border = "5px dotted red";
		}
		
	}
	/**
	 * Méthode reglerA. Fait en sorte que tous les liens absolus (dont le href commence par "/") ouvrent dans un nouvel onglet (tarbet="_blank")
	 * Niveau: difficile
	 * @returns null Ne retourne rien
	 */
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
	/**
	 * Méthode supprimerElements. Supprime les éléments HTML correspondant au sélecteur donné.
	 * Niveau: moyen
	 * @param {string} selecteur Le sélecteur des éléments à encadrer
	 * @returns null Ne retourne rien
	 */
	static supprimerElements(selecteur) {
		var elements = Array.from(document.querySelectorAll(selecteur));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].parentNode.removeChild(elements[i]);
		}
		console.log("suppression", selecteur, elements.length)
	}
	/**
	 * Méthode supprimerReference. Supprime toutes les balises <sup> ayant la classe "reference".
	 * Note: Peut utiliser la méthode supprimerElements, mais ce n'est pas nécessaire. 
	 * Niveau : moyen
	 * @returns null Ne retourne rien
	 */
	static supprimerReference() {
		var elements = Array.from(document.querySelectorAll("sup.reference"));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].parentNode.removeChild(elements[i]);
		}
	}
	/**
	 * Méthode supprimerLinkback. Supprime toutes les balises ayant les classes "noprint" et "wikidata-linkback".
	 * Note: Peut utiliser la méthode supprimerElements, mais ce n'est pas nécessaire. 
	 * Niveau : moyen
	 * @returns null Ne retourne rien
	 */
	 static supprimerLinkback() {
		var elements = Array.from(document.querySelectorAll(".noprint.wikidata-linkback"));
		for (let i = 0; i < elements.length; i += 1) {
			elements[i].parentNode.removeChild(elements[i]);
		}
	}
	/**
	 * Méthode supprimerModif. Supprime toutes les balises ayant la classe "mw-editsection".
	 * Note: Peut utiliser la méthode supprimerElements, mais ce n'est pas nécessaire. 
	 * Niveau : moyen
	 * @returns null Ne retourne rien
	 */
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
