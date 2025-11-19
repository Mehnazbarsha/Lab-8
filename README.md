# Lab 8: React Quiz with Scoring - Setup Instructions

## 📋 Overview
This project implements a React quiz application with:
- ✅ Refactored scoring functionality in a controller
- ✅ Multiple pages (Home, Quiz, Results)
- ✅ Unit tests for the ScoreController
- ✅ Functional/Selenium tests
- ✅ Improved visual design

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Application
```bash
npm start
```
The app will open at `http://localhost:3000`

### Step 3: Run Tests
```bash
# Unit tests
npm test
```

## 📁 Project Structure

```
src/
├── controllers/
│   ├── ScoreController.js          # Refactored scoring logic
│   └── ScoreController.test.js     # Unit tests
├── components/
│   ├── Quiz.js                     # Quiz component (refactored)
│   ├── HomePage.js                 # New home page
│   └── ResultsPage.js              # New results page
├── model/
│   ├── basic_questions.json        # Quiz questions
│   └── MyState.js                  # State model
├── App.js                          # Main app with routing
└── App.test.js                     # Integration tests

## 🎯 Features Implemented

### 1. Refactored Scoring (Controller Pattern)
- Created `ScoreController.js` in `src/controllers/`
- Methods: `incrementScore()`, `incrementCount()`, `getPercentage()`, `calculateGrade()`, `reset()`
- Clean separation of concerns

### 2. Multiple Pages
- **Home Page**: Welcome screen with "Start Quiz" button
- **Quiz Page**: Interactive quiz with real-time scoring
- **Results Page**: Shows grade, percentage, and encouragement message

### 3. Unit Tests
- Comprehensive tests for `ScoreController`
- Tests initialization, scoring, percentage calculation, grade calculation, and reset
- Run with: `npm test`

### 4. Enhanced UI
- Modern, responsive design
- Color-coded feedback
- Hover effects on buttons
- Visual grade display with colors
- Prevents multiple answers per question

## 🧪 Testing

### Unit Tests (Jest + React Testing Library)
```bash
npm test
```
Tests include:
- ScoreController logic
- Component rendering
- User interactions
- Alert dialogs

## 🎨 New Features

### ScoreController
- Centralized scoring logic
- Grade calculation (A, B, C, D, F)
- Percentage calculation
- Score tracking

### Navigation System
- Page-based routing without React Router
- Smooth transitions between pages
- Data passing between components

### Results Page Features
- Dynamic grade coloring
- Percentage display
- Encouragement messages based on performance
- Options to retake quiz or return home

## 📝 What Changed from Original

### Refactored
- Moved scoring logic from `Quiz.js` to `ScoreController.js`
- Improved state management
- Added prevention of multiple answers per question

### Added
- HomePage component
- ResultsPage component
- Navigation system in App.js
- Unit tests for ScoreController
- Enhanced styling and UX

### Improved
- Visual design with modern colors
- Button hover effects
- Score display
- Alert messages with grades

## 🎥 Demo Video Script

1. **Start**: Show home page with welcome message
2. **Navigate**: Click "Start Quiz" button
3. **Quiz**: Answer questions, show score updating
4. **Features**: Demonstrate Reset button
5. **Submit**: Click Submit to see alert with final grade
6. **Results**: Click "View Results" to see results page
7. **Tests**: Show unit tests passing with `npm test`

## 📦 Submission Checklist

- ✅ All code in zip file (without node_modules)
- ✅ Video demonstration
- ✅ ScoreController in controllers folder
- ✅ New pages (Home, Results)
- ✅ Unit tests passing
- ✅ Functional tests passing
- ✅ 3-step setup instructions

## 🔧 Troubleshooting

**Unit tests fail:**
- Run `npm install` to ensure all dependencies are installed
- Clear cache: `npm test -- --clearCache`

**App won't start:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (should be 14+)

## 📚 Dependencies

- React 18.3.1
- Testing Library (Jest, React Testing Library)
- ChromeDriver 142.0
- Mocha 11.7.4
- Chai 6.2.1