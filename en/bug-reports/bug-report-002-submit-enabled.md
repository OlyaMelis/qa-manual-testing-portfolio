# Bug Report — BR-002

**Title:** Submit button remains enabled when required fields are empty  
**ID:** BR-002  
**Date:** 28/01/2026  
**Author:** Olga Melis  
**Severity:** Minor  
**Priority:** Medium  
**Status:** New

## Environment
- OS: macOS
- Browser: Chrome
- Environment: Web (desktop)

## Preconditions
- User is on the Contact page
- The form is visible

## Steps to Reproduce
1. Open the Contact page
2. Leave all fields empty
3. Observe the state of the **Submit** button

## Actual Result
- The **Submit** button is enabled and clickable.
- No visual indication shows that the form is incomplete.

## Expected Result
- The **Submit** button should be disabled while required fields are empty  
  **or**
- A clear validation should prevent submission with explicit error messages.

## Impact
- User confusion
- Unnecessary validation triggers
- Degraded user experience
