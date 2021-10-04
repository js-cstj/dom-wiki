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
			console.log("Je nettoie");
			// this.supprimerModif();
			// this.supprimerLinkback();
			// this.supprimerReference();
			// this.supprimerElements(".mw-cite-backlink");
			// this.supprimerElements("#toc");
			// this.supprimerElements(".navbar");
			// this.reglerA();
			// this.centrerImage();
			// this.marquerElements("p");
		});
	}
	/**
	 * Méthode centrerImage. Aligne au centre l'image qui se trouve dans le div ayant la classe "images"
	 * Niveau : facile
	 * @returns null Ne retourne rien
	 */
	

	/**
	 * Méthode marquerElements. Encadre chaque élément correspondant au sélecteur donné.
	 * Le cadre est un pointillé rouge de 5 pixels
	 * Niveau : moyen
	 * @param {string} selecteur Le sélecteur des éléments à encadrer
	 * @returns null Ne retourne rien
	 */
	
	
	/**
	 * Méthode reglerA. Fait en sorte que tous les liens absolus (dont le href commence par "/") ouvrent dans un nouvel onglet (tarbet="_blank")
	 * Niveau: difficile
	 * @returns null Ne retourne rien
	 */
	
	
	/**
	 * Méthode supprimerElements. Supprime les éléments HTML correspondant au sélecteur donné.
	 * Niveau: moyen
	 * @param {string} selecteur Le sélecteur des éléments à encadrer
	 * @returns null Ne retourne rien
	 */
	
	
	/**
	 * Méthode supprimerReference. Supprime toutes les balises <sup> ayant la classe "reference".
	 * Note: Peut utiliser la méthode supprimerElements, mais ce n'est pas nécessaire. 
	 * Niveau : moyen
	 * @returns null Ne retourne rien
	 */
	
	
	/**
	 * Méthode supprimerLinkback. Supprime toutes les balises ayant les classes "noprint" et "wikidata-linkback".
	 * Note: Peut utiliser la méthode supprimerElements, mais ce n'est pas nécessaire. 
	 * Niveau : moyen
	 * @returns null Ne retourne rien
	 */
	
	
	/**
	 * Méthode supprimerModif. Supprime toutes les balises ayant la classe "mw-editsection".
	 * Note: Peut utiliser la méthode supprimerElements, mais ce n'est pas nécessaire. 
	 * Niveau : moyen
	 * @returns null Ne retourne rien
	 */
	
	
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns null Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
