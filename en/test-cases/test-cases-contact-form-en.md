# Test Cases — Contact Form

**Version:** 1.0  
**Date:** 27/01/2026  
**Author:** Olga Melis  
**Reference:** Test Plan — Contact Form (v1.0)

## Preconditions
- User is on the Contact page
- The form is visible

## Test Set

| ID | Title | Priority | Test Data | Steps | Expected Result |
|---|---|---:|---|---|---|
| TC-CF-001 | Form display | P1 | N/A | 1. Open Contact page | Form is displayed with Name, Email, Message fields and Submit button |
| TC-CF-002 | Submit with valid data (happy path) | P1 | Name=John Doe, Email=john.doe@test.com, Message=Hello | 1. Fill in fields 2. Click Submit | Success message / confirmation displayed |
| TC-CF-003 | Required Name field — empty submission | P1 | Name=empty | 1. Leave Name empty 2. Fill other fields 3. Submit | Error message indicating Name is required |
| TC-CF-004 | Required Email field — empty submission | P1 | Email=empty | 1. Leave Email empty 2. Fill other fields 3. Submit | Error message indicating Email is required |
| TC-CF-005 | Required Message field — empty submission | P1 | Message=empty | 1. Leave Message empty 2. Fill other fields 3. Submit | Error message indicating Message is required |
| TC-CF-006 | Invalid email format — missing @ | P1 | Email=johndoe.test.com | 1. Enter invalid email 2. Submit | Email format validation error displayed |
| TC-CF-007 | Invalid email format — missing domain | P2 | Email=john@ | 1. Enter invalid email 2. Submit | Email format validation error |
| TC-CF-008 | Name with special characters | P3 | Name=Élise Noël-Àç | 1. Fill form 2. Submit | Field accepts valid special characters |
| TC-CF-009 | Long message input | P2 | Message=very long text | 1. Enter long message 2. Submit | Consistent behavior (accepted or explicit validation message) |
| TC-CF-010 | Spaces only in required field | P2 | Name="   " | 1. Enter spaces only 2. Submit | Field treated as empty; error displayed |
| TC-CF-011 | Error message clarity | P2 | N/A | 1. Trigger validation error | Error message is visible and understandable |
| TC-CF-012 | Field values retained after error | P2 | N/A | 1. Submit with invalid email | Valid fields retain their values |
| TC-CF-013 | Submit button state behavior | P3 | N/A | 1. Observe button state | Button behavior consistent with validation rules |
| TC-CF-014 | Keyboard navigation (Tab) | P3 | N/A | 1. Navigate using Tab | Logical focus order and visible focus |
| TC-CF-015 | Page refresh resets form | P3 | N/A | 1. Fill form 2. Refresh page | Form resets to initial state |
