import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.cameras.main.faceIn(800, 0, 0, 0);
    this.add.image(400, 330, 'bootLogo');
    this.add.image(400, 760, 'bootcopyright');
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBar.fillStyle(0x222222, 0.8);
    progressBox.fillStyle(240, 490, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const LoadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 65,
      text: 'Loaing Game...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });

    LoadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2 - 15,
      y: height / 2 + 115,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 165,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });

    assetText.setOrigin(0.5, 0.5);

    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100, 0)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 500, 300 * value, 30);
    });

    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      LoadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timeEvent = this.time.delayedCall(5000, this.ready, [], this);

    this.load.crossOrigin = 'Anonymous';
    this.load.image('titleScreen', './logos/dfdLogo.png');
    this.load.image('playButton', './ buttonsplayButton.png');
    this.load.image('PlayButtonsFocus', 'playButtonFocus.png');
    this.load.image('optionsButton', './buttons/optionsButton.png');
    this.load.image('optionsButtonFocus', './buttons/optionsButtonFocus.png');
    this.load.image('creditsButton', './buttons/creditsButton.png');
    this.load.image('creditsButtonFocus', './buttons/creditsButtonFocus.png');
    this.load.image('checkbox', './buttons/checkbox.png');
    this.load.image('checkboxChecked', './buttons/checkboxChecked.png');
    this.load.image('menuButton', './buttons/menuButton.png');
    this.load.image('menuButtonFocus', './buttons/menuButtonFocus.png');
    this.load.image('gameOverTitle', './logos/gameOver.png');
    this.load.image('restartButton', './buttons/restartButton.png');
    this.load.image('restartButtonFocus', './buttons/restartButtonFocus.png');
    this.load.image('skipButton', './buttons/skipButton.png');
    this.load.image('skipButtonFocus', './buttons/skipButtonFocus.png');
    this.load.image('confirmButton', './buttons/confirmButton.png');
    this.load.image('confirmButtonFocus', './buttons/confirmButtonFocus.png');
    this.load.image('nextButton', './buttons/nextButton.png');
    this.load.image('nextButtonFocus', './buttons/nextButtonFocus.png');
    this.load.image('highscoresButton', './buttons/highscoresButton.png');
    this.load.image('highscoresButtonFocus', './buttons/highscoresButtonFocus.png');
    this.load.image('mainMenuButton', './buttons/mainMenuButton.png');
    this.load.image('mainMenuButtonFocus', './buttons/mainMenuButtonFocus.png');

    // GameScenes Assets
    this.load.image('background0', './background/bkgd_0.png');
    this.load.image('background1', './background/bkgd_1.png');
    this.load.image('background2', './background/bkgd_2.png');
    this.load.image('background3', './background/bkgd_3.png');
    this.load.image('background4', './background/bkgd_4.png');
    this.load.image('background5', './background/bkgd_5.png');
    this.load.image('background6', './background/bkgd_6.png');
    this.load.image('background7', './background/bkgd_7.png');

    // Explosion images spreadsheets
    this.load.spreadsheet('explosion1', './explosions/explosions1.png', {
      frameWidth: 96,
      frameheight: 96,
    });
  }
}