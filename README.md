# CampusLens

CampusLens is a full-stack web application that serves as a college-wide gallery platform where students, faculty, and alumni can upload and explore photos and videos from various college events.

## Features

- Event-based photo galleries
- Club & Society pages
- Reels section for short video highlights
- Photo competitions
- Interactive features (likes, comments, sharing)
- Event calendar and reminders
- Leaderboard and rewards system
- Alumni section
- Yearbook feature

## Tech Stack

- Frontend: React with TypeScript, Vite, TailwindCSS
- Backend: Node.js, Express.js
- Database: MongoDB (planned)
- Authentication: JWT (planned)

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/campuslens.git
   cd campuslens
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Project Structure

```
campuslens/
├── frontend/                  # React frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/             # React Router pages
│   │   ├── styles/            # Tailwind global styles
│   │   ├── utils/             # Helper functions
│   │   ├── App.tsx            # Main React component
│   │   ├── main.tsx           # Entry point
│   ├── public/                # Static assets
│   ├── package.json           # Dependencies
│   ├── vite.config.ts         # Vite configuration
│   └── README.md              # Frontend documentation
│
├── backend/                   # Django backend
│   ├── campuslens/            # Django project root
│   │   ├── settings.py        # Django settings
│   │   ├── urls.py            # URL routing
│   │   ├── wsgi.py            # WSGI application entry
│   │   ├── asgi.py            # ASGI application entry
│   ├── api/                   # Django REST Framework (DRF) app
│   │   ├── models.py          # Database models
│   │   ├── views.py           # API views
│   │   ├── serializers.py     # DRF serializers
│   │   ├── urls.py            # API endpoints
│   │   ├── permissions.py     # Authentication & permissions
│   ├── media/                 # Uploaded media storage
│   ├── static/                # Static files
│   ├── manage.py              # Django management script
│   ├── requirements.txt       # Python dependencies
│   ├── .env                   # Environment variables
│
├── database/                  # PostgreSQL Database setup
│   ├── migrations/            # Django migration files
│   ├── seed.py                # Sample data for dev
│
├── storage/                   # Media storage config (Cloudinary)
│   ├── cloudinary.py          # Cloudinary API setup
│
├── docs/                      # Documentation
│   ├── README.md              # Main project readme
│   ├── API_DOCS.md            # Backend API documentation
│   ├── ARCHITECTURE.md        # System design overview
│
├── scripts/                   # Automation scripts
│   ├── deploy.sh              # CI/CD Deployment script
│   ├── setup.sh               # Dev setup script
│
└── .gitignore                 # Ignore node_modules, env files, etc.n
└── README.md             # Project documentation
```

## Running

To run this project

Once the project is created, use the terminal in StackBlitz to clone this repository:

```
git clone https://github.com/Ari-111/campuslens.git
cd campuslens
```

5. Install dependencies:
   ```
   npm install
   ```
6. Start the development server:
   ```
   npm run dev
   ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
