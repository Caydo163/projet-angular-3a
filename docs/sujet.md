# Sujet projet

- aucune donnée mise en dur dans le projet (lien) => stub, ...
- Liste de recettes => Bouton add => ouvre card a droite avec form recette
	- form : ingredient => liste déroulante / tableau d'ingrédient avec bouton ajout ligne
	- card recette => image, nom, desc (50 mots), bouton detail (ouvre route /recipe/:id)
	- pagination 
- Recette : id (uint>0), nom (string), desc (string), image (string : base64), ingredients[]
- IngredientRecette : idIngrédient (uint), idRecette (uint), qte (uint)
- Ingredient : id (uint), nom (string)
- composant navbar, list recette, detail recette, form recette, 
- Au submit form recette : stocker recette dans localStorage => donc list récupère dans localStorage
- Liste ingrédient => stub

=> MAT Angular
uint => existe pas : number avec verif

avoir stub de lien

liens:
- (Lien 1) Page Login : Login :
  - show si admin = false ou inexistant
  - création d'un cookie isAdmin= true en locastorage ou cookie puis redirection vers page 2
  - si déjà login affiche page logout
- (Lien 1 bis) Page Logout :
  - show si admin = true
  - Détruit ou met a false is Admin
  - redirect sur homepage
- Page 2 : Gestion des ingrédients (/ingredients)
  - liste des ingrédients
  - MEP Guard qui vérifie si isAdmin existe et égal à true
    - Si oui affiche page /ingredients
    - Si non redirection vers accueil

