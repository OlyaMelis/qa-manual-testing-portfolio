# Test Plan — Contact Form

**Version:** 1.0  
**Date:** 27/01/2026  
**Author:** Olga Melis

## 1. Introduction

### 1.1 Objective
Define the scope, approach, and organization of manual testing performed on a web contact form as part of a QA manual testing portfolio.

### 1.2 Application under test
Web application (Contact page) — contact form (intentionally limited scope).

## 2. Test Scope

### 2.1 In Scope
- Form display
- Fields: Name, Email, Message
- Submit button
- Front-end validations (required fields, email format, length if applicable)
- Error and success messages (UI)

### 2.2 Out of Scope
- Backend / database / actual email sending
- API testing
- Performance / advanced security testing
- Automation
- Advanced mobile compatibility

## 3. Test Strategy

### 3.1 Test Types
- Functional testing
- Field validation testing
- Negative testing
- Smoke checks (access and display)

### 3.2 Test Level
System testing (manual).

## 4. Test Environment
- OS: macOS / Windows
- Browsers: Chrome, Firefox
- Mode: Desktop

## 5. Test Data
- Names: valid, empty, special characters
- Emails: valid, invalid, empty
- Message: empty, short, long

## 6. Entry and Exit Criteria

### 6.1 Entry Criteria
- Page accessible
- Form visible and usable

### 6.2 Exit Criteria
- Execution of all defined test cases
- Defects documented with reproducible steps

## 7. Defect Management
Any defect found is documented in a bug report including:
- Clear title
- Environment
- Steps to reproduce
- Actual vs expected result
- Severity / priority
- Evidence (screenshot if applicable)

## 8. Deliverables
- Test Plan (FR)
- Test Cases (FR)
- Bug Reports (FR)
- Faithful English translation (EN)

## 9. Assumptions and Limitations
- No detailed specifications available; expected behavior based on web standards
- Intentionally limited scope for portfolio purposes
