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
		document.getElementById("interface").appendChild(this.html_etapes());
	}
	static html_etapes() {
		const etapes = [
			{
				methode: () => {
					Wiki.ajouterTitre();
				},
				niveau: "facile",
				titre: "Ajouter un titre",
			},
			{
				methode: () => {
					Wiki.supprimerModif();
				},
				niveau: "moyen",
				titre: "Supprimer les liens de modification",
			},
			{
				methode: () => {
					Wiki.supprimerLinkback();
				},
				niveau: "moyen",
				titre: "Supprimer les liens de retour",
			},
			{
				methode: () => {
					Wiki.supprimerReference();
				},
				niveau: "moyen",
				titre: "Supprimer les références",
			},
			{
				methode: () => {
					Wiki.supprimerElements(".mw-cite-backlink");
				},
				niveau: "moyen",
				titre: "Supprimer les liens de citation",
			},
			{
				methode: () => {
					Wiki.supprimerElements("#toc");
				},
				niveau: "moyen",
				titre: "Supprimer la table des matières",
			},
			{
				methode: () => {
					Wiki.supprimerElements(".navbar");
				},
				niveau: "moyen",
				titre: "Supprimer la barre de navigation",
			},
			{
				methode: () => {
					Wiki.reglerA();
				},
				niveau: "difficile",
				titre: "Diriger les liens vers Wikipedia",
			},
			{
				methode: () => {
					Wiki.centrerImage();
				},
				niveau: "facile",
				titre: "Centrer l'image",
			},
			{
				methode: () => {
					Wiki.supprimerNotesEtReferences();
				},
				niveau: "moyen",
				titre: "Supprimer la section 'Notes et références'",
			},
			{
				methode: () => {
					Wiki.supprimerLiensExternes();
				},
				niveau: "moyen",
				titre: "Supprimer la section 'Liens externes'",
			},
		];
		const navEtapes = document.body.appendChild(document.createElement("nav"));
		navEtapes.id = "etapes";
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
				etape.methode();
			});
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
