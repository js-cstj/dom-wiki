export default [
	{
		methode: (Wiki) => {
			Wiki.ajouterTitre();
		},
		niveau: "facile",
		titre: "Ajouter un titre",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerModif();
		},
		niveau: "moyen",
		titre: "Supprimer les liens de modification",
		selecteur: ".mw-editsection",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerLinkback();
		},
		niveau: "moyen",
		titre: "Supprimer les liens de retour",
		selecteur: ".noprint.wikidata-linkback",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerReference();
		},
		niveau: "moyen",
		titre: "Supprimer les références",
		selecteur: "sup.reference",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerElements(".mw-cite-backlink");
		},
		niveau: "moyen",
		titre: "Supprimer les liens de citation",
		selecteur: ".mw-cite-backlink",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerElements("#toc");
		},
		niveau: "moyen",
		titre: "Supprimer la table des matières",
		selecteur: "#toc",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerElements(".navbar");
		},
		niveau: "moyen",
		titre: "Supprimer la barre de navigation",
		selecteur: ".navbar",
	},
	{
		methode: (Wiki) => {
			Wiki.reglerA();
		},
		niveau: "difficile",
		titre: "Diriger les liens vers Wikipedia",
		selecteur: "a[href^='/']",
	},
	{
		methode: (Wiki) => {
			Wiki.centrerImage();
		},
		niveau: "facile",
		titre: "Centrer l'image",
		selecteur: "div.images",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerNotesEtReferences();
		},
		niveau: "moyen",
		titre: "Supprimer la section 'Notes et références'",
		selecteur: "span#Notes_et_références",
	},
	{
		methode: (Wiki) => {
			Wiki.supprimerLiensExternes();
		},
		niveau: "moyen",
		titre: "Supprimer la section 'Liens externes'",
		selecteur: "span#Liens_externes",
	},
];
