import etapes from "./etapes.js";
import Wiki from "./Wiki.js";

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
		document.getElementById("btnMarquer").addEventListener("click", e => {
			document.body.classList.toggle("marquer");
		});
		document.getElementById("btnNettoyer").addEventListener("click", e => {
			Wiki.nettoyer();
		});
		this.ajouterStyle();
		document.getElementById("etapes").appendChild(this.html_etapes());
	}
	static ajouterStyle() {
		const style = document.createElement("style");
		style.textContent = `rien { background-image: var(--rayures); }`;
		document.head.appendChild(style);
		this.regleMarquer = style.sheet.cssRules[0];	
	}
	static html_etapes() {
		const navEtapes = document.getElementById("etapes").appendChild(document.createElement("nav"));
		const h1 = navEtapes.appendChild(document.createElement("h1"));
		h1.textContent = "Étapes";
		const ul = navEtapes.appendChild(document.createElement("ul"));
		for (const etape of etapes) {
			const li = ul.appendChild(document.createElement("li"));
			const button = li.appendChild(document.createElement("button"));
			button.textContent = etape.titre;
			button.addEventListener("click", (e) => {
				e.currentTarget.disabled = true;
				e.currentTarget.classList.add("fait");
				etape.methode(Wiki);
			});
			if (etape.selecteur) {
				let timeout;
				button.addEventListener("mouseenter", (e) => {
					this.regleMarquer.selectorText = etape.selecteur;
					timeout = setTimeout(() => {
						document.querySelector(etape.selecteur).scrollIntoView({ behavior: "smooth", block: "center" });
					}, 1000);
				});
				button.addEventListener("mouseleave", (e) => {
					this.regleMarquer.selectorText = "rien";
					clearTimeout(timeout);
				});
			}
		}
		// const li = ul.appendChild(document.createElement("li"));
		// const fait = li.appendChild(document.createElement("button"));
		// fait.classList.add("fait");
		// fait.textContent = "Ajouter le titre";
		// const li2 = ul.appendChild(document.createElement("li"));
		// const button = li2.appendChild(document.createElement("button"));
		// button.textContent = "Supprimer les backlinks";
		return navEtapes;
	}
}
