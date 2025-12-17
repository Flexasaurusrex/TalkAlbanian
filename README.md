# 🇦🇱 Mëso Shqip - Albanian Language Learning App

A comprehensive offline-first Albanian language learning web application with 650+ words, 80+ essential phrases, voice translation, quizzes, and cultural tips.

## Features

- ✅ **100% Offline Support** - Works without internet (except voice recognition)
- 📖 **650+ Word Dictionary** - Bidirectional English ↔ Albanian
- 💬 **80+ Essential Phrases** - Organized by category
- 🎤 **Voice Translation** - Speak English, get Albanian
- 🏗️ **Sentence Builder** - Quick sentence templates
- 🔤 **Albanian Alphabet** - All 36 letters with pronunciation
- 🎯 **Quiz Mode** - Test your knowledge
- 🇦🇱 **Cultural Tips** - Etiquette & travel advice
- ⭐ **Favorites System** - Save your most-used phrases
- 📊 **Progress Tracking** - Track learning goals

## Quick Start

### Local Development

1. Clone this repository
2. Open `index.html` in a web browser
3. That's it! No build process needed.

### Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

No configuration needed! Vercel will automatically serve the static files.

### Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repo
5. Click "Deploy site"

### Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be live at `https://[username].github.io/[repo-name]`

## Project Structure

```
albanian-app/
├── index.html      # Main HTML structure
├── styles.css      # All styling
├── app.js          # JavaScript functionality
└── README.md       # This file
```

## Browser Compatibility

- ✅ Chrome/Edge (recommended for voice features)
- ✅ Firefox
- ✅ Safari
- ⚠️ Voice recognition requires modern browser with Web Speech API

## Technologies Used

- Pure HTML5, CSS3, JavaScript (ES6+)
- No frameworks or dependencies
- Progressive Web App (PWA) capabilities
- LocalStorage for offline data persistence
- Web Speech API for voice features

## Features Breakdown

### Dictionary (650+ words)
- Common verbs, nouns, adjectives
- Numbers, colors, body parts
- Food, family, weather terms
- Question words, prepositions

### Phrase Library (80+ phrases)
- Greetings & Basics
- Introductions
- Communication
- Shopping & Money
- Dining
- Directions
- Emergency phrases

### Learning Tools
- **Flashcards** - Spaced repetition learning
- **Quiz Mode** - Word, phrase, and listening quizzes
- **Voice Input** - Speak to translate
- **Sentence Builder** - Template-based sentences
- **Favorites** - Quick access to saved phrases
- **History** - Recent translations

### Cultural Guide
- Albanian etiquette
- Dining customs
- Money & shopping tips
- Emergency numbers
- Common mistakes to avoid

## Offline Support

The app uses:
- Embedded dictionary (no external API calls)
- LocalStorage for user data
- Service Worker (optional, can be added)

Only voice recognition requires internet connection.

## License

MIT License - Feel free to use and modify!

## Contributing

Contributions welcome! Please feel free to submit a Pull Request.

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ for Albanian language learners
