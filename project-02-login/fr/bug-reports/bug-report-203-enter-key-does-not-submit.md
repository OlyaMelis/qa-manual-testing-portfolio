# Bug Report — BR-203

**Titre :** La touche Enter ne soumet pas le formulaire Login quand le focus est dans le champ Password  
**ID :** BR-203  
**Date :** 29/01/2026  
**Auteur :** Olga Melis  
**Sévérité :** Minor  
**Priorité :** Medium  
**Statut :** New

## Environnement
- OS : macOS
- Navigateur : Chrome
- URL : https://the-internet.herokuapp.com/login

## Préconditions
- Page Login visible

## Étapes de reproduction
1. Renseigner Username et Password (valeurs valides ou invalides)
2. Placer le focus dans le champ **Password**
3. Appuyer sur **Enter**

## Résultat actuel
- Aucune action (le formulaire n’est pas soumis).

## Résultat attendu
- Appuyer sur Enter doit soumettre le formulaire de login (comportement standard web).

## Impact
- Mauvaise expérience clavier
- Régression d’accessibilité basique

## Référence
- Test Case : TC-LG-009
