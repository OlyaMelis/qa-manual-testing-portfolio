# Bug Report — BR-202

**Titre :** Le message d’erreur persiste après correction des identifiants et nouvel essai  
**ID :** BR-202  
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
- Identifiants valides disponibles sur la page Login

## Étapes de reproduction
1. Saisir des identifiants invalides
2. Cliquer sur **Login**
3. Observer le message d’erreur
4. Corriger avec des identifiants valides
5. Cliquer à nouveau sur **Login**

## Résultat actuel
- Le message d’erreur précédent reste affiché (ou reste partiellement visible) pendant la tentative suivante.

## Résultat attendu
- Le message d’erreur doit disparaître (ou être remplacé proprement) lors d’une nouvelle tentative.
- En cas de succès, seul le message de succès / la redirection doit apparaître.

## Impact
- Confusion utilisateur
- Perception de dysfonctionnement même si le login réussit

## Référence
- Test Case : TC-LG-002, TC-LG-003/004/005
