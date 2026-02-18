# Bug Report — BR-201

**Titre :** Accès à la Secure Area possible après logout via bouton “Retour” du navigateur (session non invalidée)  
**ID :** BR-201  
**Date :** 29/01/2026  
**Auteur :** Olga Melis  
**Sévérité :** Major  
**Priorité :** High  
**Statut :** New

## Environnement
- OS : macOS
- Navigateur : Chrome
- URL : https://the-internet.herokuapp.com/login

## Préconditions
- Identifiants valides disponibles sur la page Login

## Étapes de reproduction
1. Se connecter avec des identifiants valides
2. Vérifier l’accès à la page Secure Area
3. Cliquer sur **Logout**
4. Cliquer sur le bouton **Retour** du navigateur

## Résultat actuel
- La page Secure Area s’affiche à nouveau après le logout (sans nouvelle authentification).

## Résultat attendu
- Après logout, l’accès à la Secure Area doit être impossible.
- L’utilisateur doit être redirigé vers la page Login ou recevoir un message “unauthorized”.

## Impact
- Contournement de la déconnexion (risque sécurité)
- Accès potentiel à une zone protégée sur un poste partagé

## Référence
- Test Case : TC-LG-011
