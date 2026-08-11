# Chatgram AI

> An AI-powered chatbot built with **AngularJS, .NET 10, ML.NET, SignalR, and SQL Server**.

Chatgram AI is a full-stack intelligent chatbot project designed to demonstrate practical **.NET, Machine Learning, real-time communication, and software architecture** skills.

The chatbot uses **ML.NET** to classify user messages into predefined intents and generate appropriate responses based on the detected intent.

---

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

### Machine Learning

* ML.NET
* Text Classification
* Intent Classification
* Model Training
* Model Evaluation
* Model Prediction

### Database

* Microsoft SQL Server
* Entity Framework Core
* Code First / Migrations

### Architecture

* Clean Architecture
* Dependency Injection
* SOLID Principles
* Separation of Concerns
* Repository Pattern
* Service/Application Layer

---

# 🤖 How It Works

Chatgram AI uses a machine-learning model to understand the user's message and predict its intent.

```text
User
 │
 │ "I forgot my password"
 ▼
AngularJS
 │
 ▼
.NET 10 API
 │
 ▼
ML.NET Model
 │
 ▼
Intent Classification
 │
 └── PasswordReset
        │
        ▼
 Response Engine
        │
        ▼
"I can help you reset your password."
```

The system separates **message understanding** from **response generation**, making it possible to extend the chatbot with additional intents and business rules.

---

# 🧠 Machine Learning

The initial machine-learning model focuses on **text classification**.

Example training data:

```text
Text                              Intent
------------------------------------------------
Hello                             Greeting
Hi                                Greeting
Good morning                      Greeting

I forgot my password              PasswordReset
How can I reset my password?      PasswordReset
I need to change my password      PasswordReset

What are your working hours?      BusinessHours
When are you open?                BusinessHours

I want to cancel my order         CancelOrder
Cancel my purchase                CancelOrder
```

The model learns the relationship between user messages and their corresponding intents.

At runtime:

```text
Input Text
    │
    ▼
ML.NET Model
    │
    ▼
Predicted Intent
    │
    ▼
Confidence Score
    │
    ▼
Response Engine
    │
    ▼
Chatbot Response
```

---

# 🎯 Core Features

## Authentication

* User registration
* User login
* JWT authentication
* Refresh tokens
* Logout
* Protected API endpoints
* Password hashing
* Authorization

## Chat

* Real-time chatbot conversation
* Message history
* Conversation management
* User-specific conversations
* Real-time responses
* Typing indicator

## Machine Learning

* Intent classification
* ML.NET model training
* Model evaluation
* Model prediction
* Confidence score
* Fallback handling
* Training dataset management

## Response Engine

The response engine maps predicted intents to appropriate responses.

```text
Greeting
    ↓
Greeting Response

PasswordReset
    ↓
Password Reset Response

BusinessHours
    ↓
Business Hours Response

Unknown
    ↓
Fallback Response
```

---

# 🏗️ Architecture

The application follows a Clean Architecture approach.

```text
Chatgram AI
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
├── Machine Learning
│   └── Chatgram.ML
│
├── Database
│   └── SQL Server
│
└── Tests
    ├── Chatgram.UnitTests
    └── Chatgram.IntegrationTests
```

---

# 📦 Project Structure

```text
src/
│
├── Chatgram.Api
│
├── Chatgram.Application
│
├── Chatgram.Domain
│
├── Chatgram.Infrastructure
│
└── Chatgram.ML

tests/
│
├── Chatgram.UnitTests
└── Chatgram.IntegrationTests

frontend/
└── AngularJS application

docs/
├── architecture
├── machine-learning
└── api
```

---

# 🔹 Application Layer

The Application layer contains the main application use cases.

Responsibilities include:

* Chat operations
* Authentication
* Conversation management
* Message processing
* Intent prediction
* Response generation
* Validation

Example flow:

```text
ChatController
      │
      ▼
ChatService
      │
      ├── ML Prediction
      │
      ├── Intent Processing
      │
      └── Response Generation
```

---

# 🔹 Domain Layer

The Domain layer contains the core business concepts.

Example entities:

```text
User
Conversation
Message
Intent
TrainingExample
ChatbotResponse
RefreshToken
```

The Domain layer does not depend on infrastructure or UI technologies.

---

# 🔹 Infrastructure Layer

The Infrastructure layer handles external dependencies.

Responsibilities include:

* SQL Server
* Entity Framework Core
* Repositories
* Authentication infrastructure
* Persistence
* External services

---

# 🧠 ML Layer

The ML layer is responsible for machine-learning operations.

```text
Chatgram.ML
│
├── Dataset
│
├── Training
│
├── Evaluation
│
├── Prediction
│
└── Models
```

Example workflow:

```text
Training Dataset
      │
      ▼
Data Preparation
      │
      ▼
ML.NET Pipeline
      │
      ▼
Training
      │
      ▼
Evaluation
      │
      ▼
Model
      │
      ▼
Prediction
```

---

# 💬 Real-Time Communication

SignalR is used to provide real-time communication between the client and backend.

```text
AngularJS
    │
    │ SignalR
    ▼
.NET 10
    │
    ▼
Chat Service
    │
    ▼
ML.NET
    │
    ▼
Response
    │
    ▼
SignalR
    │
    ▼
AngularJS
```

This allows chatbot responses to be delivered immediately without continuous polling.

---

# 🔐 Authentication

Chatgram AI uses JWT-based authentication.

```text
Login
  │
  ▼
ASP.NET Core API
  │
  ├── Validate Credentials
  │
  ├── Access Token
  │
  └── Refresh Token
  │
  ▼
AngularJS
  │
  ▼
Authenticated Requests
```

Protected resources require a valid JWT access token.

---

# 🗄️ Database

The initial database design includes:

```text
Users
  │
  ├── RefreshTokens
  │
  └── Conversations
          │
          ▼
       Messages

TrainingExamples
      │
      ▼
    Intents

ChatbotResponses
```

### Main Entities

#### Users

Stores user authentication and profile information.

#### Conversations

Represents a chatbot conversation.

#### Messages

Stores messages exchanged between the user and chatbot.

#### Intents

Stores available chatbot intents.

#### TrainingExamples

Contains examples used to train the ML.NET model.

#### ChatbotResponses

Contains responses associated with detected intents.

---

# 📊 Model Evaluation

The machine-learning model will be evaluated using appropriate classification metrics.

The project will track metrics such as:

* Accuracy
* Precision
* Recall
* F1 Score
* Confusion Matrix

Example:

```text
Model Evaluation
----------------
Accuracy:   0.94
Precision:  0.93
Recall:     0.92
F1 Score:   0.92
```

> The values above are examples only. Actual metrics will be reported after model training.

---

# 🛡️ Confidence & Fallback

The chatbot should not blindly trust every prediction.

```text
User Message
     │
     ▼
ML.NET Prediction
     │
     ▼
Confidence Score
     │
     ├── High Confidence
     │       ↓
     │    Process Intent
     │
     └── Low Confidence
             ↓
       Fallback Response
```

For low-confidence predictions, the chatbot can ask the user to rephrase the question or provide additional information.

---

# 🛠️ Getting Started

## Prerequisites

Install:

* .NET 10 SDK
* SQL Server
* Node.js / npm
* Git
* Modern web browser

---

## Clone

```bash
git clone https://github.com/KTajerbashi/chatgram-ai.git

cd chatgram-ai
```

---

## Configure Database

Update the connection string in the backend configuration:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=ChatgramAiDb;Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

---

## Apply Migrations

```bash
dotnet ef database update
```

---

## Run Backend

```bash
dotnet run
```

---

## Run Frontend

Start the AngularJS application using the configured development environment.

Configure:

```text
API URL
SignalR Hub URL
```

according to your local environment.

---

# 🧪 Testing

The project is designed to include both unit and integration tests.

```text
tests/
│
├── Chatgram.UnitTests
│
└── Chatgram.IntegrationTests
```

Testing areas include:

### Authentication

* Registration
* Login
* JWT validation
* Refresh tokens

### Chat

* Conversation creation
* Message processing
* Message persistence

### Machine Learning

* Intent prediction
* Confidence handling
* Model integration
* Response selection

### API

* Endpoint validation
* Authorization
* Error handling

---

# 🔒 Security

Security is an important part of the project.

The application is designed around:

* JWT authentication
* Password hashing
* Authorization
* Input validation
* Protected API endpoints
* Secure database access
* Refresh token management
* Configuration-based secrets
* Separation of concerns

Sensitive configuration values should never be committed to source control.

---

# 📋 Roadmap

## Phase 1 — Foundation

* [ ] Repository structure
* [ ] .NET 10 solution
* [ ] Clean Architecture
* [ ] SQL Server
* [ ] EF Core
* [ ] AngularJS integration

## Phase 2 — Authentication

* [ ] User registration
* [ ] Login
* [ ] JWT
* [ ] Refresh token
* [ ] Logout
* [ ] Authorization

## Phase 3 — Chat

* [ ] Chat UI
* [ ] Conversations
* [ ] Messages
* [ ] Message history
* [ ] SignalR
* [ ] Real-time responses

## Phase 4 — Machine Learning

* [ ] Training dataset
* [ ] Intent definitions
* [ ] ML.NET pipeline
* [ ] Model training
* [ ] Model evaluation
* [ ] Model persistence
* [ ] Prediction service
* [ ] Confidence score
* [ ] Fallback handling

## Phase 5 — Administration

* [ ] Training data management
* [ ] Intent management
* [ ] Response management
* [ ] Model training endpoint
* [ ] Model evaluation dashboard
* [ ] Model versioning

## Phase 6 — Production

* [ ] Docker
* [ ] Docker Compose
* [ ] CI/CD
* [ ] Structured logging
* [ ] Monitoring
* [ ] Production configuration
* [ ] Cloud deployment

---

# 🔮 Future Features

Potential future improvements:

* Conversation context
* Conversation memory
* Multi-turn conversations
* Entity extraction
* Semantic search
* Knowledge base
* Document-based question answering
* Retrieval-Augmented Generation (RAG)
* LLM integration
* Multiple AI models
* Model versioning
* Analytics dashboard
* Human handoff
* Multi-language support

---

# 🎯 Project Goals

The main goal of Chatgram AI is to demonstrate practical experience with:

* C#
* .NET 10
* ASP.NET Core
* AngularJS
* SQL Server
* Entity Framework Core
* ML.NET
* Machine Learning
* Natural Language Processing
* Text Classification
* Intent Classification
* SignalR
* JWT Authentication
* Clean Architecture
* REST API
* Automated Testing
* Docker
* CI/CD

This project is developed as a portfolio project with a focus on practical software engineering and applied machine learning.

---

# 📚 Documentation

Project documentation will cover:

* Architecture
* Database design
* API design
* Authentication
* SignalR
* ML.NET training
* Dataset preparation
* Model evaluation
* Deployment

Documentation will be maintained under:

```text
/docs
```

---

# 👨‍💻 Author

**Tajer-K**

GitHub:

https://github.com/KTajerbashi

---

# 📄 License

This project is available for educational and portfolio purposes.

# 🪜 Steps
```` Step 1 → Solution & Projects → Step 2 → Domain → Step 3 → Database → Step 4 → Auth → Step 5 → ML.NET → Step 6 → Chat UI → Step 7 → SignalR ````
