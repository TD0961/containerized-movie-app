# 🎬 Movie Application - Full Stack Project

**Built with ❤️ for learning and showing skills of full-stack development and DevOps**


A professional full-stack movie application built with modern technologies, demonstrating best practices in development and DevOps.

## 🚀 Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### DevOps & Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and load balancer
- **MongoDB Atlas** - Cloud database (production)

## 🏗️ Architecture

```
├── frontend/          # React TypeScript application
├── backend/           # Node.js Express API
├── nginx/            # Reverse proxy configuration
├── docker-compose.yml # Multi-container setup
└── README.md         # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)
- MongoDB Atlas account (for production)

### 1. Clone and Setup
```bash
git clone <https://github.com/TD0961/containerized-movie-app.git>
cd first-docker-project
cp env.template .env
# Edit .env with your configuration
```

### 2. Run with Docker
```bash
# Start all services
docker compose up -d

# View logs
docker compose logs -f

# Stop services
docker compose down
```

### 3. Local Development
```bash
# Backend
cd backend
npm install
npm start # refer your package.json start script

# Frontend
cd frontend
npm install
npm run dev
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test              # Run tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### Frontend Tests
```bash
cd frontend
npm run test          # Run tests
npm run test:ui       # UI test runner
```

## 🔧 Development Scripts

### Backend
- `npm run dev` - Start development server
- `npm test` - Run test suite
- `npm run lint` - Check code quality
- `npm run lint:fix` - Auto-fix linting issues

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality

## 🌍 Environment Variables

Copy `env.template` to `.env` and configure:

- **Database**: MongoDB connection strings
- **API Keys**: OMDB API for movie data
- **Ports**: Service port configurations
- **Secrets**: JWT keys and sensitive data

## 📊 API Endpoints

### Movies
- `GET /api/movies` - List all movies
- `GET /api/movies/:id` - Get movie by ID
- `POST /api/movies` - Create new movie
- `PUT /api/movies/:id` - Update movie
- `DELETE /api/movies/:id` - Delete movie

### Health Check
- `GET /health` - Service health status

## 🐳 Docker Services

- **Frontend**: React app on port 3000
- **Backend**: Express API on port 5000
- **MongoDB**: Database on port 27017
- **Nginx**: Reverse proxy on ports 80/443

## 🚀 Production Deployment

### 1. Environment Setup
```bash
NODE_ENV=production
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your-production-secret
```

### 2. Build and Deploy
```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Deploy to production
docker-compose -f docker-compose.prod.yml up -d
```

### 3. Monitoring
- Health checks configured for all services
- Log aggregation with Docker logging drivers
- Metrics collection for performance monitoring

## 🔒 Security Features

- CORS configuration
- Environment variable management
- Input validation (planned)
- Rate limiting (planned)
- JWT authentication (planned)

## 📈 Performance Optimizations

- Docker layer caching
- Nginx reverse proxy
- MongoDB connection pooling
- React code splitting
- Vite build optimization

## 🧪 Testing Strategy

- **Unit Tests**: Jest for backend, Vitest for frontend
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Playwright (planned)
- **Performance Tests**: Load testing (planned)

## 📚 Learning Path

This project demonstrates:

1. **Full-Stack Development**: React + Node.js + MongoDB
2. **DevOps Practices**: Docker, containerization, orchestration
3. **Testing**: Unit, integration, and E2E testing
4. **Security**: Authentication, validation, CORS
5. **Performance**: Optimization, monitoring, scaling
6. **Production**: Deployment, monitoring, maintenance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
- Create an issue in the repository
- Check the documentation
- Review the code examples

---

**Built with ❤️ for learning full-stack development and DevOps**
