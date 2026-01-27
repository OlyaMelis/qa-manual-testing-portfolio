# Test Cases — Formulaire de contact

**Version :** 1.0  
**Date :** 27/01/2026  
**Auteur :** Olga Melis  
**Référence :** Test Plan — Formulaire de contact (v1.0)

## Préconditions
- L’utilisateur est sur la page « Contact »
- Le formulaire est visible

## Jeu de tests

| ID | Titre | Priorité | Données de test | Étapes | Résultat attendu |
|---|---|---:|---|---|---|
| TC-CF-001 | Affichage du formulaire | P1 | N/A | 1. Ouvrir la page Contact | Le formulaire s’affiche : champs Nom, Email, Message + bouton Envoyer |
| TC-CF-002 | Envoi avec données valides (happy path) | P1 | Nom=Jean Dupont, Email=jean.dupont@test.com, Message=Bonjour | 1. Saisir les champs 2. Cliquer Envoyer | Message de succès affiché / confirmation visible |
| TC-CF-003 | Nom obligatoire — soumission vide | P1 | Nom=vide, Email=valide, Message=valide | 1. Laisser Nom vide 2. Remplir Email/Message 3. Envoyer | Erreur “Nom requis” (ou équivalent). Aucun succès |
| TC-CF-004 | Email obligatoire — soumission vide | P1 | Nom=valide, Email=vide, Message=valide | 1. Remplir Nom/Message 2. Laisser Email vide 3. Envoyer | Erreur “Email requis” (ou équivalent) |
| TC-CF-005 | Message obligatoire — soumission vide | P1 | Nom=valide, Email=valide, Message=vide | 1. Remplir Nom/Email 2. Laisser Message vide 3. Envoyer | Erreur “Message requis” (ou équivalent) |
| TC-CF-006 | Validation format email — email invalide (sans @) | P1 | Email=jeandupont.test.com | 1. Remplir Nom/Message 2. Saisir email invalide 3. Envoyer | Erreur de format email. Aucun succès |
| TC-CF-007 | Validation format email — email invalide (sans domaine) | P2 | Email=jean@ | 1. Remplir Nom/Message 2. Saisir email invalide 3. Envoyer | Erreur de format email |
| TC-CF-008 | Nom avec caractères spéciaux | P3 | Nom=Élise Noël-Àç | 1. Remplir formulaire 2. Envoyer | Le champ accepte les caractères usuels. Envoi possible si le reste est valide |
| TC-CF-009 | Message long (test limite raisonnable) | P2 | Message=texte très long (ex: 2000+ caractères) | 1. Remplir Nom/Email 2. Coller un message long 3. Envoyer | Comportement cohérent : soit envoi accepté, soit validation limite avec message explicite |
| TC-CF-010 | Espaces uniquement dans un champ obligatoire | P2 | Nom="   " | 1. Mettre uniquement des espaces dans Nom 2. Remplir le reste 3. Envoyer | Le champ est considéré vide → erreur affichée |
| TC-CF-011 | Messages d’erreur visibles et compréhensibles | P2 | N/A | 1. Provoquer une erreur (ex email vide) | Erreur lisible, près du champ ou en haut du formulaire, sans ambiguïté |
| TC-CF-012 | Conservation des valeurs après erreur | P2 | N/A | 1. Remplir tout 2. Mettre email invalide 3. Envoyer | Les champs valides restent заполнены ; seul l’email est signalé |
| TC-CF-013 | Bouton Envoyer activé/désactivé selon validation (si applicable) | P3 | N/A | 1. Observer bouton au chargement 2. Remplir/vider champs | Comportement cohérent : bouton activé seulement quand requis rempli (si règle UI) |
| TC-CF-014 | Navigation clavier (Tab) | P3 | N/A | 1. Utiliser Tab pour passer champs/bouton | Focus visible, ordre logique : Nom → Email → Message → Envoyer |
| TC-CF-015 | Rechargement page — formulaire réinitialisé | P3 | N/A | 1. Saisir des valeurs 2. Recharger la page | Le formulaire revient à l’état initial (sauf si comportement prévu différent) |
