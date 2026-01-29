# Bug Report — BR-003

**Title:** Error message persists after correcting the Email field  
**ID:** BR-003  
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
1. Enter an invalid email (e.g. `testmail.com`)
2. Click **Submit**
3. Observe the email error message
4. Correct the email with a valid value
5. Observe the error message state

## Actual Result
- The error message remains displayed after correcting the field.

## Expected Result
- The error message should disappear as soon as the Email field becomes valid.

## Impact
- User confusion
- Doubt about form validity
- Degraded user experience
