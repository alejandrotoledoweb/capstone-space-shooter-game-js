import Phaser from 'phaser';
import config from '../config/config';
import ButtonGen from '../objects/ButtonGen';
import ScrollingBackground from '../objects/ScrollingBackground';
import { postHighscores, fetchHighscores } from '../highscoreAPI';

export default class PostGameHighscoresScene extends Phaser.Scene {
  constructor() {
    super('PostGameHighscoresScene');
  }


  create() {
    this.playerSettings = {
      pilotName: this.sys.game.globals.pilotName,
      score: this.sys.game.globals.score,
    };

    this.highscore = this.add.text(config.width / 2, 100, `${this.playerSettings.pilotName}\nFinal Score: ${this.playerSettings.score}`, {
      fontFamily: 'Retro Team',
      fontSize: '56px',
      color: '#31a2f2',
      align: 'center',
      lineHeight: '1.5',
      border: '4px solid #9d9d9d',
    }).setOrigin(0.5, 0.5);

    postHighscores(this.playerSettings.pilotName, this.playerSettings.score).then(response => {
      if (response.result !== undefined) {
        this.messages = this.add.text(16, 16, `${response.result}`, {
          fontFamily: 'Retroniod',
          fontSize: '18px',
          color: '#31a2f2',
          align: 'center',
          lineHeight: '1.5',
        });
      }
    });

    fetchHighscores().then(response => {
      response.sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .map((game, i) => {
          if (game[1] === this.playerSettings.score) {
            const text = `${i + 1}. Soldier: ${game[0]} --- Score: ${game[1]}`;
            this.add.text(config.width / 2, (85 * (i + 1.1)) + 100, text, {
              fontFamily: 'Retro Team',
              fontSize: '38px',
              color: '#31a2f2',
              align: 'center',
              lineHeight: '1.5',
            }).setOrigin(0.5, 0.5);
            return text;
          }
          const text = `${i + 1}. Soldier: ${game[0]} --- Score: ${game[1]}`;
          this.add.text(config.width / 2, (85 * (i + 1.1)) + 100, text, {
            fontFamily: 'Retro Team',
            fontSize: '38px',
            color: '#31a2f2',
            align: 'center',
            lineHeight: '1.5',
          }).setOrigin(0.5, 0.5);
          return text;
        });
    });

    this.sfx = {
      btnHover: this.sound.add('buttonHover', { volume: 0.5 }),
      btnSelect: this.sound.add('buttonSelect', { volume: 0.5 }),
    };

    this.nextButton = new ButtonGen(this, config.width / 2, config.height / 2 + 300, 'nextButton', 'nextButtonFocus', 'GameOver', this.sfx.btnHover, this.sfx.btnSelect);


    this.backgrounds = [];
    for (let i = 0; i < 8; i += 1) {
      const keys = ['background0', 'background1', 'background2', 'background3', 'background4', 'background5', 'background6', 'background7'];
      const bg = new ScrollingBackground(this, keys[i], i * 3);
      this.backgrounds.push(bg);
    }
  }

  update() {
    for (let i = 0; i < this.backgrounds.length; i += 1) {
      this.backgrounds[i].update();
    }
  }
}
