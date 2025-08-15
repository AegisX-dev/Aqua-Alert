# Aqua Alert Backend API Documentation

A water intake tracking application backend built with Node.js, Express, and MongoDB.

## Table of Contents
- [Base URL](#base-url)
- [Authentication](#authentication)
- [User Endpoints](#user-endpoints)
- [Data Models](#data-models)
- [Error Handling](#error-handling)

## Base URL
```
http://localhost:5000/api
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Protected routes require the `Authorization` header with a Bearer token.

**Header Format:**
```
Authorization: Bearer <your_jwt_token>
```

## User Endpoints

### 1. Register User
Create a new registered user account.

**Endpoint:** `POST /users/register`

**Request Body:**
```json
{
  "email": "user@example.com",          // Required for registered users
  "display_name": "JohnDoe",            // Required, 2-50 characters, unique
  "password": "password123",            // Required, minimum 6 characters
  "timezone": "America/New_York",       // Optional, defaults to "UTC"
  "goal": {                             // Optional
    "units_volume": "ml",               // "ml" or "fl_oz", defaults to "ml"
    "amount": 2000                      // Number 1-10000, defaults to 2000
  }
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "uuid-string",
    "email": "user@example.com",
    "display_name": "JohnDoe",
    "timezone": "America/New_York",
    "goal": {
      "units_volume": "ml",
      "amount": 2000
    },
    "is_anonymous": false,
    "created_at": "2025-08-15T10:30:00.000Z",
    "updated_at": "2025-08-15T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "error": "Display name and password are required"
}
```

---

### 2. Login User
Authenticate a registered user and receive a JWT token.

**Endpoint:** `POST /users/login`

**Request Body:**
```json
{
  "display_name": "JohnDoe",            // Required
  "password": "password123"             // Required
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "id": "uuid-string",
    "email": "user@example.com",
    "display_name": "JohnDoe",
    "timezone": "America/New_York",
    "goal": {
      "units_volume": "ml",
      "amount": 2000
    },
    "is_anonymous": false,
    "created_at": "2025-08-15T10:30:00.000Z",
    "updated_at": "2025-08-15T10:30:00.000Z"
  },
  "token": "jwt_token_string"
}
```

**Error Response (401):**
```json
{
  "error": "Invalid credentials"
}
```

---

### 3. Create Anonymous User
Create an anonymous user account (no email/password required).

**Endpoint:** `POST /users/anonymous`

**Request Body:**
```json
{
  "display_name": "GuestUser123",       // Required, 2-50 characters, unique
  "timezone": "Asia/Kolkata",           // Optional, defaults to "UTC"
  "goal": {                             // Optional
    "units_volume": "fl_oz",            // "ml" or "fl_oz", defaults to "ml"
    "amount": 64                        // Number 1-10000, defaults to 2000
  }
}
```

**Success Response (201):**
```json
{
  "message": "Anonymous user created successfully",
  "user": {
    "id": "uuid-string",
    "display_name": "GuestUser123",
    "timezone": "Asia/Kolkata",
    "goal": {
      "units_volume": "fl_oz",
      "amount": 64
    },
    "is_anonymous": true,
    "created_at": "2025-08-15T10:30:00.000Z",
    "updated_at": "2025-08-15T10:30:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "error": "Display name is required"
}
```

---

### 4. Get User Profile
Retrieve the authenticated user's profile information.

**Endpoint:** `GET /users/profile`

**Authentication:** Required (Bearer Token)

**Success Response (200):**
```json
{
  "user": {
    "id": "uuid-string",
    "email": "user@example.com",
    "display_name": "JohnDoe",
    "timezone": "America/New_York",
    "goal": {
      "units_volume": "ml",
      "amount": 2000
    },
    "is_anonymous": false,
    "created_at": "2025-08-15T10:30:00.000Z",
    "updated_at": "2025-08-15T10:30:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "error": "User not found"
}
```

**Error Response (401):**
```json
{
  "error": "Access token is missing or invalid"
}
```

---

### 5. Update User Profile
Update the authenticated user's profile information.

**Endpoint:** `PUT /users/profile`

**Authentication:** Required (Bearer Token)

**Request Body:** (All fields optional)
```json
{
  "email": "newemail@example.com",      // Optional, must be valid email
  "display_name": "NewDisplayName",     // Optional, 2-50 characters, unique
  "timezone": "Europe/London",          // Optional, valid IANA timezone
  "goal": {                             // Optional
    "units_volume": "ml",               // "ml" or "fl_oz"
    "amount": 2500                      // Number 1-10000
  }
}
```

**Success Response (200):**
```json
{
  "message": "Profile updated successfully",
  "user": {
    "id": "uuid-string",
    "email": "newemail@example.com",
    "display_name": "NewDisplayName",
    "timezone": "Europe/London",
    "goal": {
      "units_volume": "ml",
      "amount": 2500
    },
    "is_anonymous": false,
    "created_at": "2025-08-15T10:30:00.000Z",
    "updated_at": "2025-08-15T11:45:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "error": "Validation error message"
}
```

---

### 6. Delete User Account
Permanently delete the authenticated user's account.

**Endpoint:** `DELETE /users/account`

**Authentication:** Required (Bearer Token)

**Success Response (200):**
```json
{
  "message": "Account deleted successfully"
}
```

**Error Response (400):**
```json
{
  "error": "Error deleting account"
}
```

---

## Data Models

### User Model
```javascript
{
  id: String,                    // UUID, unique identifier
  email: String,                 // Email address (nullable for anonymous users)
  display_name: String,          // Display name (2-50 characters, unique)
  password: String,              // Hashed password (required for registered users)
  timezone: String,              // IANA timezone (default: "UTC")
  goal: {
    units_volume: String,        // "ml" or "fl_oz" (default: "ml")
    amount: Number               // Daily intake goal 1-10000 (default: 2000)
  },
  is_anonymous: Boolean,         // True if anonymous user (default: false)
  created_at: Date,              // Account creation timestamp
  updated_at: Date               // Last update timestamp
}
```

### Goal Object
```javascript
{
  units_volume: "ml" | "fl_oz",  // Volume unit
  amount: Number                 // Target daily intake (1-10000)
}
```

---

## Error Handling

The API uses standard HTTP status codes and returns errors in JSON format:

### Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error, missing required fields)
- `401` - Unauthorized (invalid credentials, missing/invalid token)
- `404` - Not Found (user not found)
- `500` - Internal Server Error

### Error Response Format
```json
{
  "error": "Error description message"
}
```

### Common Validation Errors
- Display name must be 2-50 characters and unique
- Email must be valid format (for registered users)
- Password must be at least 6 characters (for registered users)
- Timezone must be valid IANA timezone
- Goal amount must be between 1-10000
- Goal units must be "ml" or "fl_oz"

---

## Authentication Flow

1. **Register/Create User:** Use `/users/register` or `/users/anonymous`
2. **Login:** Use `/users/login` to get JWT token (registered users only)
3. **Access Protected Routes:** Include `Authorization: Bearer <token>` header
4. **Token Expiration:** Tokens expire, re-login when receiving 401 errors

---

## Example Usage

### Register and Login Flow
```bash
# 1. Register user
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "display_name": "johndoe",
    "password": "securepass123",
    "timezone": "America/New_York",
    "goal": {"units_volume": "ml", "amount": 2500}
  }'

# 2. Login user
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "display_name": "johndoe",
    "password": "securepass123"
  }'

# 3. Access protected route
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```

### Anonymous User Flow
```bash
# 1. Create anonymous user
curl -X POST http://localhost:5000/api/users/anonymous \
  -H "Content-Type: application/json" \
  -d '{
    "display_name": "guestuser",
    "timezone": "UTC",
    "goal": {"units_volume": "fl_oz", "amount": 64}
  }'
```