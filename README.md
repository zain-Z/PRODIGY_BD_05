# 🏨 Hotel Booking API

A RESTful API built with **NestJS**, **MongoDB**, and **Mongoose** to handle user authentication, hotel listings, room management, and booking operations.

---

## 📦 Features

- 🔐 User authentication with JWT and bcrypt
- 👥 User registration and role management (`user` / `admin`)
- 🏨 Hotel listing CRUD operations
- 🛏️ Room creation and association with hotels
- 📅 Booking rooms with date ranges
- 📚 Mongoose ODM with NestJS integration
- 🌐 Configurable via `.env` file

---

## 📁 Project Structure

```
src/
│
├── auth/           # JWT auth and guards
├── users/          # User schema, controller, service
├── hotels/         # Hotel schema, controller, service
├── rooms/          # Room schema, controller, service
├── bookings/       # Booking schema, controller, service
├── app.module.ts   # Main application module
└── main.ts         # Entry point
```

---

## 🧪 Technologies Used

- **NestJS** - Node.js framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication middleware
- **JWT** - JSON Web Token for secure login
- **bcrypt** - Password hashing

---

## ⚙️ Environment Variables

Create a `.env` file in your root directory with:

```
MONGODB_URI=mongodb://localhost:27017/hotel-api
JWT_SECRET=yourSuperSecretKey
JWT_EXPIRES_IN=3600s
```

---

## 🚀 Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Start MongoDB**

Ensure MongoDB is running locally or use a cloud connection string.

3. **Run the server**

```bash
npm run start:dev
```

---

## 🔒 Authentication

### Register

`POST /users`

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "123456"
}
```

### Login

`POST /auth/login`

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

Returns:

```json
{
  "access_token": "your.jwt.token"
}
```

Use this token in the `Authorization` header as: `Bearer <token>`

---

## 🧪 Sample Endpoints

- `POST /users` – Register
- `POST /auth/login` – Login
- `GET /hotels` – List hotels
- `POST /hotels` – Create hotel (admin only)
- `POST /rooms/:hotelId` – Add room to hotel
- `POST /bookings` – Book a room

---

## ✅ TODO

- [x] Users & Auth
- [x] Hotel Module
- [x] Room Module
- [x] Booking Module
- [ ] Reviews & Ratings (optional)
- [ ] Admin Dashboard (optional)

---

## 🧠 Author

Made with ❤️ by Zain Abo Almagd