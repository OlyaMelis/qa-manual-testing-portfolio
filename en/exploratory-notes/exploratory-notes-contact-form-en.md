# Exploratory Testing Notes — Contact Form

**Date:** 29/01/2026  
**Author:** Olga Melis  
**Goal:** Complement test cases with observations from a short exploratory session.

## Charter (scope)
- Page: Contact
- Focus: validations, messages, UX, light accessibility (keyboard)

## Heuristics used
- Required fields / formats
- Error handling (show/hide)
- Data retention on validation errors
- Keyboard navigation (Tab)
- Success/failure messaging

## Observations (examples)
- Error messages: ensure they disappear after fixing the input.
- Data: ensure Message is not cleared after a validation error.
- UX: Submit button enabled/disabled — expected consistency.
- Light accessibility: visible focus, logical tab order.

## Risks / open questions
- Max field lengths (Name/Message) are not specified.
- Expected Submit behavior (disabled vs validate on click) is unclear.
