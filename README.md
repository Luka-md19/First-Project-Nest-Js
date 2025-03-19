# NestJS Blog API

This is a NestJS-based API for a blog application with features including authentication, post management, file uploads, and email notifications.

## Features

- User authentication (JWT)
- Google OAuth integration
- Blog post CRUD operations
- File uploads to AWS S3
- Email notifications
- Role-based access control

## Prerequisites

- Node.js (v14+)
- PostgreSQL
- AWS account (for S3 file uploads)
- SMTP service (for email notifications)

## Installation

1. Clone the repository
```bash
git clone https://github.com/Luka-md19/First-Project-Nest-Js.git
cd First-Project-Nest-Js
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
   - Copy the `.env.example` file to create `.env`, `.env.development`, and `.env.test` files
   - Fill in your actual configuration values

## Environment Variables

Key environment variables that need to be configured:
- Database connection details
- JWT secrets
- AWS S3 credentials
- SMTP settings
- Google OAuth credentials

## Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod

# Run tests
npm run test
```

## API Documentation

API documentation is generated using Compodoc:

```bash
npm run doc
```

Then open `http://localhost:3001` in your browser.

## Project Structure

- `src/auth/` - Authentication logic
- `src/users/` - User management
- `src/posts/` - Blog post operations
- `src/uploads/` - File upload functionality
- `src/mail/` - Email service

## License

This project is licensed under the MIT License.
