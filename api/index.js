const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'BetBuddy API - Sports Betting Stats & AI Predictions',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      sports: '/api/sports',
      games: '/api/games',
      predictions: '/api/predictions',
      players: '/api/players',
      health: '/api/health'
    }
  });
});

// Sports endpoint - All 10 sports
app.get('/api/sports', (req, res) => {
  res.json({
    sports: [
      {
        id: 1,
        name: 'NFL',
        league: 'National Football League',
        season: 2024,
        teams: 32
      },
      {
        id: 2,
        name: 'NBA',
        league: 'National Basketball Association',
        season: 2024,
        teams: 30
      },
      {
        id: 3,
        name: 'MLB',
        league: 'Major League Baseball',
        season: 2024,
        teams: 30
      },
      {
        id: 4,
        name: 'NHL',
        league: 'National Hockey League',
        season: 2024,
        teams: 32
      },
      {
        id: 5,
        name: 'MLS',
        league: 'Major League Soccer',
        season: 2024,
        teams: 29
      },
      {
        id: 6,
        name: 'Premier League',
        league: 'English Football',
        season: 2024,
        teams: 20
      },
      {
        id: 7,
        name: 'Champions League',
        league: 'European Football',
        season: 2024,
        teams: 32
      },
      {
        id: 8,
        name: 'NBA G League',
        league: 'Professional Basketball Development',
        season: 2024,
        teams: 30
      },
      {
        id: 9,
        name: 'NCAA Football',
        league: 'College Football',
        season: 2024,
        teams: 130
      },
      {
        id: 10,
        name: 'NCAA Basketball',
        league: 'College Basketball',
        season: 2024,
        teams: 350
      }
    ]
  });
});

// Games endpoint - Upcoming games with predictions
app.get('/api/games', (req, res) => {
  res.json({
    games: [
      {
        id: 1,
        sport: 'NFL',
        home_team: 'Kansas City Chiefs',
        away_team: 'Buffalo Bills',
        date: '2026-01-12T20:00:00Z',
        odds: {
          home: -110,
          away: -110,
          over_under: 47.5
        },
        status: 'scheduled'
      },
      {
        id: 2,
        sport: 'NBA',
        home_team: 'Los Angeles Lakers',
        away_team: 'Boston Celtics',
        date: '2026-05-15T22:30:00Z',
        odds: {
          home: -150,
          away: 130,
          over_under: 215.5
        },
        status: 'scheduled'
      },
      {
        id: 3,
        sport: 'MLB',
        home_team: 'New York Yankees',
        away_team: 'Boston Red Sox',
        date: '2026-06-20T19:00:00Z',
        odds: {
          home: -120,
          away: 100,
          over_under: 8.5
        },
        status: 'scheduled'
      },
      {
        id: 4,
        sport: 'Premier League',
        home_team: 'Manchester City',
        away_team: 'Liverpool',
        date: '2026-05-18T15:00:00Z',
        odds: {
          home: -150,
          away: 450,
          draw: 300
        },
        status: 'scheduled'
      }
    ]
  });
});

// Predictions endpoint - AI predictions
app.get('/api/predictions', (req, res) => {
  res.json({
    predictions: [
      {
        game_id: 1,
        sport: 'NFL',
        matchup: 'Kansas City Chiefs vs Buffalo Bills',
        ai_pick: 'Kansas City Chiefs',
        confidence: 65,
        analysis: 'Chiefs have stronger offense and defensive consistency. Home field advantage is significant.',
        predicted_score: '28-24',
        model: 'openai-gpt-4',
        generated_at: new Date().toISOString()
      },
      {
        game_id: 2,
        sport: 'NBA',
        matchup: 'Los Angeles Lakers vs Boston Celtics',
        ai_pick: 'Boston Celtics',
        confidence: 72,
        analysis: 'Celtics have superior team defense and 3-point shooting. Better recent form.',
        predicted_score: '115-108',
        model: 'openai-gpt-4',
        generated_at: new Date().toISOString()
      },
      {
        game_id: 3,
        sport: 'MLB',
        matchup: 'New York Yankees vs Boston Red Sox',
        ai_pick: 'New York Yankees',
        confidence: 58,
        analysis: 'Yankees have edge in lineup depth. Red Sox pitching is inconsistent recently.',
        predicted_score: '5-3',
        model: 'openai-gpt-4',
        generated_at: new Date().toISOString()
      },
      {
        game_id: 4,
        sport: 'Premier League',
        matchup: 'Manchester City vs Liverpool',
        ai_pick: 'Manchester City',
        confidence: 68,
        analysis: 'City dominates possession and scoring. Liverpool defense slightly weakened.',
        predicted_score: '2-1',
        model: 'openai-gpt-4',
        generated_at: new Date().toISOString()
      }
    ]
  });
});

// Players endpoint - Player statistics
app.get('/api/players', (req, res) => {
  res.json({
    players: [
      {
        id: 1,
        name: 'Patrick Mahomes',
        sport: 'NFL',
        team: 'Kansas City Chiefs',
        position: 'QB',
        stats: {
          passing_yards: 5250,
          touchdowns: 41,
          interceptions: 10,
          completion_percentage: 66.5
        },
        injuries: []
      },
      {
        id: 2,
        name: 'LeBron James',
        sport: 'NBA',
        team: 'Los Angeles Lakers',
        position: 'SF',
        stats: {
          points_per_game: 23.5,
          rebounds_per_game: 8.2,
          assists_per_game: 9.1,
          field_goal_percentage: 52.3
        },
        injuries: []
      },
      {
        id: 3,
        name: 'Aaron Judge',
        sport: 'MLB',
        team: 'New York Yankees',
        position: 'RF',
        stats: {
          batting_average: 0.322,
          home_runs: 52,
          rbi: 144,
          slugging_percentage: 0.694
        },
        injuries: [
          {
            type: 'shoulder',
            status: 'day_to_day',
            expected_return: '2026-05-20'
          }
        ]
      },
      {
        id: 4,
        name: 'Erling Haaland',
        sport: 'Premier League',
        team: 'Manchester City',
        position: 'ST',
        stats: {
          goals: 38,
          assists: 8,
          appearances: 35,
          shots_on_target: 156
        },
        injuries: []
      }
    ]
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal server error',
    message: err.message
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`BetBuddy API running on port ${PORT}`);
});

module.exports = app;
