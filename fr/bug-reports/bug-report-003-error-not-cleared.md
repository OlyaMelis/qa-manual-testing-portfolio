# Bug Report — BR-003

**Titre :** Le message d’erreur persiste après correction du champ Email  
**ID :** BR-003  
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
1. Saisir un email invalide (ex : `testmail.com`)
2. Cliquer sur **Envoyer**
3. Observer le message d’erreur Email
4. Corriger l’email avec une valeur valide
5. Observer l’état du message d’erreur

## Résultat actuel
- Le message d’erreur reste affiché après correction du champ.

## Résultat attendu
- Le message d’erreur devrait disparaître dès que le champ Email est valide.

## Impact
- Confusion utilisateur
- Doute sur la validité du formulaire
- Expérience utilisateur dégradée
