# Bug Report — BR-002

**Titre :** Le bouton Envoyer reste actif lorsque les champs obligatoires sont vides  
**ID :** BR-002  
**Date :** 28/01/2026  
**Auteur :** Olga Melis  
**Sévérité :** Minor  
**Priorité :** Medium  
**Statut :** New

## Environnement
- OS : macOS
- Navigateur : Chrome
- Environnement : Web (desktop)

## Préconditions
- L’utilisateur est sur la page « Contact »
- Le formulaire est visible

## Étapes de reproduction
1. Ouvrir la page Contact
2. Ne remplir aucun champ
3. Observer l’état du bouton **Envoyer**

## Résultat actuel
- Le bouton **Envoyer** est actif et cliquable.
- Aucun indicateur visuel n’indique que le formulaire est incomplet.

## Résultat attendu
- Le bouton **Envoyer** devrait être désactivé tant que les champs obligatoires ne sont pas remplis  
  **ou**
- Une validation claire devrait empêcher l’envoi avec des messages explicites.

## Impact
- Confusion utilisateur
- Déclenchement inutile de validations
- Dégradation de l’expérience utilisateur
