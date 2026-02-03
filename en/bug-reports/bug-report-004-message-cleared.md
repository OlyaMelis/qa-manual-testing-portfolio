# Bug Report — BR-004

**Title:** Message field content is cleared after validation error  
**ID:** BR-004  
**Date:** 29/01/2026  
**Author:** Olga Melis  
**Severity:** Major  
**Priority:** High  
**Status:** New

## Environment
- OS: macOS
- Browser: Chrome
- Environment: Web (desktop)

## Preconditions
- User is on the Contact page
- The form is visible

## Steps to Reproduce
1. Enter a **long message** (multiple sentences)
2. Leave the **Email** field empty or invalid
3. Click **Submit**
4. Observe the Message field after the validation error

## Actual Result
- A validation error message is displayed for the Email field.
- The **Message field is cleared** and its content is lost.

## Expected Result
- The validation error should be displayed.
- The **Message field content should be preserved** after the error.

## Impact
- User data loss
- High user frustration
- Increased risk of form abandonment
- Significant degradation of user experience

## Reference
- Test Case: TC-CF-012 (Field values retained after error)
