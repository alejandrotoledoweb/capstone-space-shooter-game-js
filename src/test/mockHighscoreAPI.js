import 'regenerator-runtime';

const fetch = require('node-fetch');

const initializeGame = async () => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'Space Soldiers' }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    throw new Error('Unable to initialize game. Please try again.');
  }
};

const postHighscores = async (soldier, score) => {
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: soldier, score }),
    });
    const response = await request.json();
    return response;
  } catch (err) {
    throw new Error('Unable to post Highscores! Please try again later!');
  }
};

const fetchHighscores = async () => {
  const leaderboard = [];
  try {
    const request = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
    const data = response.result;
    data.forEach(entry => {
      leaderboard.push([entry.user, entry.score]);
    });
    return leaderboard;
  } catch (error) {
    throw new Error('Unable to fetch Highscores! Please try again later!');
  }
};


export { initializeGame, fetchHighscores, postHighscores };
