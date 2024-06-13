# Sujet projet

- aucune donnée mise en dur dans le projet (lien) => stub, ...
- Liste de recettes => Bouton add => ouvre card a droite avec form recette
	- form : ingredient => liste déroulante / tableau d'ingrédient avec bouton ajout ligne
	- card recette => image, nom, desc (50 mots), bouton detail
	- pagination 
- Recette : id (uint>0), nom (string), desc (string), image (string : base64), ingredients[]
- IngredientRecette : idIngrédient (uint), idRecette (uint), qte (uint)
- Ingredient : id (uint), nom (string)
- composant navbar, list recette, detail recette, form recette, 
- Au submit form recette : stocker recette dans localStorage => donc list récupère dans localStorage
- Liste ingrédient => stub

=> MAT Angular