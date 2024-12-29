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
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main App component
│   │   └── main.tsx      # Entry point
│   ├── index.html        # HTML template
│   └── vite.config.ts    # Vite configuration
├── server/               # Backend Express application
│   ├── src/
│   │   ├── routes/       # API routes
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # Database models
│   │   └── app.ts        # Express app setup
│   └── tsconfig.json     # TypeScript configuration for backend
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
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
