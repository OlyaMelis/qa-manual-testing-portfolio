# Test Plan (FR) — Login / Authentification — The Internet

**Version :** 1.0  
**Date :** 29/01/2026  
**Auteur :** Olga Melis  

## 1. Objectif
Définir l’approche et la portée des tests manuels du flux de connexion (login) pour une application web.

## 2. Application testée
- Application : The Internet — Form Authentication
- URL : https://the-internet.herokuapp.com/login
- Identifiants de test : fournis directement sur la page

## 3. Périmètre (Scope)

### In Scope
- Page Login : champs Username et Password
- Bouton Login
- Messages d’erreur en cas d’échec
- Scénario positif : connexion réussie vers la Secure Area
- Déconnexion (Logout)
- UX basique :
  - soumission via bouton
  - soumission via touche Enter
  - focus clavier

### Out of Scope
- Sécurité avancée (brute-force, MFA, chiffrement)
- Backend / base de données
- Tests API
- Performance
- Automatisation

## 4. Stratégie de test
- Tests fonctionnels (happy path + scénarios négatifs)
- Tests de validation UI
- Vérification des messages d’erreur
- Tests de navigation et d’utilisabilité de base

## 5. Environnement de test
- OS : macOS
- Navigateurs : Chrome, Firefox
- Mode : Desktop

## 6. Données de test
- Identifiants valides (fournis sur la page)
- Identifiants invalides :
  - username incorrect
  - password incorrect
  - username et password incorrects
- Champs vides
- Champs contenant uniquement des espaces

## 7. Critères d’entrée et de sortie

### Entry Criteria
- URL accessible
- Page Login visible

### Exit Criteria
- Tous les test cases exécutés
- Bugs documentés avec étapes claires
- Résultats attendus vs résultats réels définis

## 8. Livrables
- Test Plan (FR)
- Test Cases (FR)
- Bug Reports (FR)
- Traduction fidèle en anglais (EN)
