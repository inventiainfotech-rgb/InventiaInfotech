# SMTP Serverless Setup

This project now sends emails through a shared serverless function at `api/send-email.js`.

## Required server-side environment variables

- `SMTP_HOST`
- `SMTP_PORT` (usually `587` or `465`)
- `SMTP_SECURE` (`true` for SSL/465, otherwise `false`)
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM` (example: `Inventia <no-reply@yourdomain.com>`)
- `SMTP_TO` (destination inbox for form submissions)

## Frontend endpoint configuration

- Default endpoint used by both forms: `/api/send-email`
- Optional override: `REACT_APP_EMAIL_API_URL`

Use `REACT_APP_EMAIL_API_URL` when your frontend and function are on different domains.
