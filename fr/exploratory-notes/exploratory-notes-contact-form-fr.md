# Notes de tests exploratoires — Formulaire de contact

**Date :** 29/01/2026  
**Auteur :** Olga Melis  
**Objectif :** Compléter les test cases par des observations issues d’une session exploratoire courte.

## Charte (scope)
- Page : Contact
- Focus : validations, messages, UX, accessibilité légère (clavier)

## Heuristiques utilisées
- Champs obligatoires / formats
- Gestion des erreurs (apparition/disparition)
- Conservation des données en cas d’erreur
- Navigation clavier (Tab)
- Messages de succès/échec

## Observations (exemples)
- Messages d’erreur : vérifier qu’ils disparaissent après correction.
- Données : vérifier que Message n’est pas effacé après erreur.
- UX : bouton Envoyer activé/désactivé — cohérence attendue.
- Accessibilité légère : focus visible, ordre de tabulation logique.

## Risques / points à clarifier
- Longueur maximale des champs (Nom/Message) non spécifiée.
- Comportement attendu du bouton Envoyer (désactivation vs validation au clic).
