# Task Manager Application

A full-stack task management application built with React and Node.js.

## Features

- User Authentication
- Task Creation and Management
- Real-time Updates
- Responsive Design

## Tech Stack

### Frontend
- React
- Material-UI
- Context API
- Vite

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication

## Getting Started

1. Clone the repository
2. Install dependencies for both client and server
3. Set up environment variables
4. Run the development servers

### Installation

```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Environment Variables

Create `.env` files in both client and server directories:

Client `.env`:
```
VITE_API_URL=http://localhost:5000
```

Server `.env`:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Application

```bash
# Run client (from client directory)
npm run dev

# Run server (from server directory)
npm start
```

## Project Structure

```
/
├── client/                # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # Context providers
│   │   ├── pages/         # Page components
│   │   └── theme.js       # Material-UI theme configuration
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── routes/            # API routes
    ├── models/            # Database models
    ├── middleware/        # Custom middleware
    └── package.json
```

## API Endpoints

### Authentication
- POST /api/auth/register - Register new user
- POST /api/auth/login - Login user

### Tasks
- GET /api/tasks - Get all tasks
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

This project is licensed under the MIT License.
