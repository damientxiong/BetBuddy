# BetBuddy - Sports Betting Stats & AI Predictions

A comprehensive sports betting analysis platform with AI-powered predictions for 10 major sports leagues.

## 🚀 Features

- **10 Sports Coverage**: NFL, NBA, MLB, NHL, MLS, Premier League, Champions League, NBA G League, NCAA Football, NCAA Basketball
- **AI Predictions**: OpenAI-powered game analysis and predictions
- **Player Statistics**: Real-time player stats and injury tracking
- **Game Odds**: Live odds and betting lines
- **Confidence Scoring**: AI confidence levels for each prediction

## 📊 Supported Sports

1. **NFL** - National Football League
2. **NBA** - National Basketball Association
3. **MLB** - Major League Baseball
4. **NHL** - National Hockey League
5. **MLS** - Major League Soccer
6. **Premier League** - English Football
7. **Champions League** - European Football
8. **NBA G League** - Professional Basketball Development
9. **NCAA Football** - College Football
10. **NCAA Basketball** - College Basketball

## 🔌 API Endpoints

### Base URL
```
https://your-domain.vercel.app
```

### Endpoints

- `GET /` - API health check
- `GET /api/sports` - List all 10 sports
- `GET /api/games` - Upcoming games with odds
- `GET /api/predictions` - AI predictions for games
- `GET /api/players` - Player statistics
- `GET /api/health` - Server health status

## 🛠️ Tech Stack

- **Backend**: Node.js + Express.js
- **Deployment**: Vercel
- **AI**: OpenAI GPT-4
- **Database**: (MongoDB/PostgreSQL - coming soon)

## 📦 Installation

```bash
npm install
```

## 🏃 Running Locally

```bash
npm run dev
```

## 🌐 Deployment on Vercel

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables:
   - `OPENAI_API_KEY`
   - `THE_ODDS_API_KEY`
4. Deploy!

## 📝 Environment Variables

```
OPENAI_API_KEY=your_openai_key
THE_ODDS_API_KEY=your_odds_api_key
NODE_ENV=production
```

## 🎯 Next Features

- [ ] Real-time odds integration
- [ ] Advanced ML prediction models
- [ ] User betting tracker
- [ ] React frontend dashboard
- [ ] Email alerts for predictions
- [ ] Mobile app

## 📄 License

MIT
