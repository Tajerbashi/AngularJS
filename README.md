# Chatgram

A real-time chat application built with **AngularJS, .NET 10, SQL Server, and SignalR**.

Chatgram is a portfolio-oriented full-stack application designed to demonstrate modern backend architecture, authentication, real-time communication, database design, and production-oriented software development practices.

## 🚀 Tech Stack

### Frontend

* AngularJS
* JavaScript
* HTML5
* CSS3

### Backend

* .NET 10
* ASP.NET Core Web API
* C#
* Entity Framework Core
* SignalR
* JWT Authentication
* RESTful APIs

### Database

* Microsoft SQL Server
* Entity Framework Core
* Code First / Migrations

### Architecture

* Clean Architecture
* Domain-Driven Design principles
* Dependency Injection
* Repository Pattern
* Service/Application Layer
* Separation of Concerns

---

## ✨ Features

### Authentication

* User registration
* User login
* JWT authentication
* Refresh token support
* Logout
* Password hashing
* Protected API endpoints
* Authentication middleware

### Chat

* One-to-one conversations
* Real-time messaging
* Message history
* Online/offline user status
* Typing indicator
* Message read status
* Conversation management

### Real-Time Communication

Chatgram uses **SignalR** to provide real-time communication between users.

The application can deliver events such as:

* New messages
* Typing notifications
* User online/offline status
* Message read status

---

## 🏗️ Architecture

The backend follows a Clean Architecture approach.

```text
Chatgram
│
├── Frontend
│   └── AngularJS
│
├── Backend
│   ├── Chatgram.Api
│   ├── Chatgram.Application
│   ├── Chatgram.Domain
│   └── Chatgram.Infrastructure
│
├── Database
│   └── SQL Server
│
└── Real-Time
    └── SignalR
```

### Project Layers

#### Chatgram.Api

Responsible for:

* HTTP endpoints
* Authentication configuration
* Middleware
* SignalR Hubs
* Dependency Injection
* API configuration

#### Chatgram.Application

Contains application business logic:

* Commands
* Queries
* DTOs
* Application services
* Validation
* Interfaces

#### Chatgram.Domain

Contains the core business domain:

* Entities
* Value Objects
* Domain rules
* Domain interfaces
* Business logic

#### Chatgram.Infrastructure

Responsible for external concerns:

* Entity Framework Core
* SQL Server
* Repository implementations
* Authentication infrastructure
* External services

---

## 🗄️ Database Design

The initial database contains the following main entities:

```text
Users
  │
  ├── RefreshTokens
  │
  └── ConversationParticipants
             │
             ▼
       Conversations
             │
             ▼
         Messages
```

### Main Tables

#### Users

Stores application users and their authentication/profile information.

#### RefreshTokens

Stores refresh tokens used to obtain new access tokens.

#### Conversations

Represents a chat conversation.

#### ConversationParticipants

Maps users to conversations.

#### Messages

Stores messages exchanged between users.

---

## 🔐 Authentication Flow

Chatgram uses JWT-based authentication.

```text
Client
  │
  │ Login
  ▼
.NET API
  │
  ├── Validate credentials
  │
  ├── Generate Access Token
  │
  └── Generate Refresh Token
  │
  ▼
Client
  │
  │ Authorization: Bearer <token>
  ▼
Protected API
```

Access tokens are used for API authentication, while refresh tokens are used to obtain new access tokens.

---

## 💬 Real-Time Chat Flow

```text
User A
  │
  │ Send Message
  ▼
AngularJS
  │
  ▼
SignalR
  │
  ▼
.NET 10
  │
  ├── Validate user
  ├── Store message
  └── Broadcast event
  │
  ▼
SignalR
  │
  ▼
User B
```

This allows messages to appear in real time without requiring the client to continuously poll the API.

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:

* .NET 10 SDK
* SQL Server
* Node.js / npm
* A modern web browser
* Git

### Clone Repository

```bash
git clone https://github.com/KTajerbashi/angularjs.chatgram.git

cd angularjs.chatgram
```

### Configure Database

Update the SQL Server connection string in the backend configuration:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=ChatgramDb;Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

### Apply Database Migrations

```bash
dotnet ef database update
```

### Run Backend

```bash
dotnet run
```

The API will be available through the configured ASP.NET Core URLs.

### Run Frontend

Open the AngularJS application and configure the API and SignalR endpoints according to the local environment.

---

## 🧪 Testing

The project is intended to include automated tests for the main application layers.

```text
tests/
├── Chatgram.UnitTests
└── Chatgram.IntegrationTests
```

Testing areas include:

* Authentication
* User registration
* Login
* Token validation
* Conversation creation
* Sending messages
* Message authorization
* API endpoints

---

## 🔒 Security

Security is an important part of the project.

The application is designed around:

* JWT authentication
* Password hashing
* Protected API endpoints
* Authorization policies
* Refresh token rotation
* Input validation
* User authorization
* Secure database access
* Separation of authentication and business logic

Secrets and connection strings should not be committed to source control.

---

## 📋 Roadmap

### Phase 1 — Foundation

* [x] Repository setup
* [ ] Backend solution
* [ ] Clean Architecture
* [ ] SQL Server integration
* [ ] EF Core configuration

### Phase 2 — Authentication

* [ ] User registration
* [ ] Login
* [ ] JWT access token
* [ ] Refresh token
* [ ] Logout
* [ ] Authorization

### Phase 3 — Chat

* [ ] User list
* [ ] Create conversation
* [ ] Send message
* [ ] Message history
* [ ] SignalR integration
* [ ] Online/offline status
* [ ] Typing indicator
* [ ] Read status

### Phase 4 — Quality

* [ ] Unit tests
* [ ] Integration tests
* [ ] Global exception handling
* [ ] Structured logging
* [ ] API documentation
* [ ] Validation
* [ ] Security hardening

### Phase 5 — Deployment

* [ ] Docker
* [ ] Docker Compose
* [ ] CI/CD
* [ ] Production configuration
* [ ] Cloud deployment

---

## 📚 API Documentation

The API will provide RESTful endpoints for:

```text
/api/auth
/api/users
/api/conversations
/api/messages
```

SignalR will provide real-time communication through:

```text
/hubs/chat
```

API documentation will be available through Swagger/OpenAPI.

---

## 🎯 Project Goals

The primary goal of Chatgram is to demonstrate practical full-stack software engineering skills, including:

* Backend development with .NET 10
* C# development
* REST API design
* Real-time communication with SignalR
* SQL Server database design
* Entity Framework Core
* JWT authentication
* Clean Architecture
* Automated testing
* Security
* Docker
* CI/CD

This project is continuously evolving as new engineering practices and features are introduced.

---

## 📌 Future Features

Potential future improvements include:

* Group conversations
* Message reactions
* File and image attachments
* Reply to messages
* Message editing
* Message deletion
* Message search
* User profiles
* Notifications
* Block users
* Presence management
* Admin dashboard
* Docker deployment
* Cloud deployment

---

## 👨‍💻 Author

**KTajerbashi**

GitHub:

https://github.com/KTajerbashi

---

## 📄 License

This project is available for educational and portfolio purposes.
