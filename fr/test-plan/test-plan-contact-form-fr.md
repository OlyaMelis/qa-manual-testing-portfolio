# Test Plan — Formulaire de contact

**Version :** 1.0  
**Date :** 27/01/2026  
**Auteur :** Olga Melis

## 1. Introduction

### 1.1 Objectif
Définir le périmètre, l’approche et l’organisation des tests manuels réalisés sur un formulaire de contact web, dans le cadre du portfolio QA (manual testing).

### 1.2 Application testée
Application web (page « Contact ») — formulaire de contact (scope volontairement réduit).

## 2. Périmètre des tests (Scope)

### 2.1 In Scope
- Affichage du formulaire
- Champs : Nom, Email, Message
- Bouton d’envoi
- Validations côté front (obligatoire, format email, longueurs si applicables)
- Messages d’erreur et de succès (UI)

### 2.2 Out of Scope
- Backend / base de données / envoi réel d’email
- Tests API
- Performance / sécurité avancée
- Automatisation
- Compatibilité mobile avancée

## 3. Stratégie de test

### 3.1 Types de tests
- Tests fonctionnels
- Tests de validation des champs
- Tests négatifs (erreurs attendues)
- Smoke check (accès et affichage)

### 3.2 Niveau de test
System testing (manuel).

## 4. Environnement de test

- OS : macOS / Windows
- Navigateurs : Chrome, Firefox
- Mode : Desktop

## 5. Données de test
- Noms : valide, vide, caractères spéciaux
- Emails : valide, invalide, vide
- Message : vide, court, long

## 6. Critères d’entrée et de sortie

### 6.1 Critères d’entrée
- Page accessible
- Formulaire visible et utilisable

### 6.2 Critères de sortie
- Exécution de l’ensemble des test cases définis
- Anomalies documentées (bug reports) avec étapes de reproduction

## 7. Gestion des anomalies
Toute anomalie trouvée est documentée dans un bug report contenant :
- Titre clair
- Environnement
- Étapes de reproduction
- Résultat actuel vs attendu
- Sévérité / priorité
- Preuves (capture d’écran si possible)

## 8. Livrables
- Test Plan (FR)
- Test Cases (FR)
- Bug Reports (FR)
- Traduction fidèle en EN

## 9. Hypothèses et limitations
- Absence de spécifications détaillées : comportement attendu basé sur standards web
- Scope volontairement réduit pour livrable portfolio
