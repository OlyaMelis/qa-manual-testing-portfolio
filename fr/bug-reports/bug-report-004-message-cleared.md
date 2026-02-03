# Bug Report — BR-004

**Titre :** Le contenu du champ Message est perdu après une erreur de validation  
**ID :** BR-004  
**Date :** 29/01/2026  
**Auteur :** Olga Melis  
**Sévérité :** Major  
**Priorité :** High  
**Statut :** New

## Environnement
- OS : macOS
- Navigateur : Chrome
- Environnement : Web (desktop)

## Préconditions
- L’utilisateur est sur la page « Contact »
- Le formulaire est visible

## Étapes de reproduction
1. Saisir un **Message long** (plusieurs phrases)
2. Laisser le champ **Email** vide ou invalide
3. Cliquer sur **Envoyer**
4. Observer l’état du champ Message après l’erreur

## Résultat actuel
- Un message d’erreur est affiché pour le champ Email.
- Le champ **Message est vidé** et son contenu est perdu.

## Résultat attendu
- Le formulaire doit afficher l’erreur de validation.
- Le contenu du champ **Message doit être conservé** après l’erreur.

## Impact
- Perte de données utilisateur
- Frustration élevée
- Risque d’abandon du formulaire
- Dégradation significative de l’expérience utilisateur

## Référence
- Test Case : TC-CF-012 (Conservation des valeurs après erreur)
