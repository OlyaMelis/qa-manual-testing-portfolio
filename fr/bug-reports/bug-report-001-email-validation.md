# Bug Report — BR-001

**Titre :** Le formulaire accepte un email invalide (absence de “@”) et affiche un succès  
**ID :** BR-001  
**Date :** 27/01/2026  
**Auteur :** Olga Melis  
**Sévérité :** Major  
**Priorité :** High  
**Statut :** New

## Environnement
- OS : macOS
- Navigateur : Chrome (dernière version)
- Environnement : Web (desktop)

## Préconditions
- L’utilisateur est sur la page « Contact »
- Le formulaire est visible

## Étapes de reproduction
1. Saisir un **Nom** valide (ex : `Jean Dupont`)
2. Saisir un **Email** invalide (ex : `jeandupont.test.com` — sans `@`)
3. Saisir un **Message** valide (ex : `Bonjour`)
4. Cliquer sur **Envoyer**

## Résultat actuel
- Le formulaire affiche un message de succès / confirmation d’envoi.
- Aucun message d’erreur n’est affiché pour le champ Email.

## Résultat attendu
- Le formulaire doit empêcher l’envoi.
- Un message d’erreur doit indiquer que le format de l’email est invalide.

## Impact
- Risque de collecte de données incorrectes
- Messages non délivrés / perte de contact utilisateur
- Dégradation de la qualité des leads / support

## Référence
- Test Case : TC-CF-006 (Validation format email — email invalide)
