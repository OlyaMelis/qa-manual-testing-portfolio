# Bug Report — BR-001

**Title:** Contact form accepts invalid email (missing "@") and displays success message  
**ID:** BR-001  
**Date:** 27/01/2026  
**Author:** Olga Melis  
**Severity:** Major  
**Priority:** High  
**Status:** New

## Environment
- OS: macOS
- Browser: Chrome (latest)
- Environment: Web (desktop)

## Preconditions
- User is on the Contact page
- The form is visible

## Steps to Reproduce
1. Enter a valid Name (e.g. John Doe)
2. Enter an invalid Email (e.g. `johndoe.test.com`)
3. Enter a valid Message
4. Click Submit

## Actual Result
- A success message is displayed.
- No validation error is shown for the Email field.

## Expected Result
- Submission should be blocked.
- An error message should indicate the invalid email format.

## Impact
- Incorrect data collection
- Messages not delivered
- Degraded data quality

## Reference
- Test Case: TC-CF-006
