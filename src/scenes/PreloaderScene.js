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
    this.load.spritesheet('explosion2', './explosions/explosion2.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('explosion3', './explosions/explosion3.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet('explosion4', './explosions/explosion4.png', {
      frameWidth: 256,
      frameHeight: 256,
    });
    this.load.spritesheet('explosion5', './explosions/explosion5.png', {
      frameWidth: 256,
      frameHeight: 256,
    });
    this.load.spritesheet('explosion6', './explosions/explosion6.png', {
      frameWidth: 256,
      frameHeight: 256,
    });

    // NPC assets
    this.load.image('startfleetCaptain', './npc/SecurityOfficer.png');

    // Enemies lasers and ships
    // Ninja Ship
    this.load.spritesheet('ninja', './ships/Ninja.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    // Ninja Laser
    this.load.image('ninjaLaser1', './lasers.blue1.png');

    // UFO ship
    this.load.spritesheet('ufo', './ships/UFO.png', {
      frameWidth: 32,
      frameHeight: 32,
    });

    // UFO Lasers
    this.load.image('ufoLasers1', './lasers/red/1.png');

    // Paranoid Ship
    this.load.spritesheet('paranoid', './ships/Paranoid.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Paranoid Lasers
    this.load.image('paranoidLasers5', './lasers/green/5.png');

    // Saboteur Ship
    this.load.spritesheet('saboteur', './ships/Saboteur.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Saboteur Lasers
    this.load.image('saboteurLasers4', './lasers/pink/4.png');

    // Lightning Ship
    this.load.spritesheet('lightning', './ships/Lightning.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Lightning Lasers
    this.load.image('lightningLasers5', './lasers/yellow/5.png');

    // Player Ship
    this.load.spritesheet('player', './ships/Lighter.png', {
      frameWidth: 45,
      frameHeight: 45,
    });

    // Player lasers
    this.load.image('playerLaser3', './lasers/turq/3.png');

    // SFX effects

    this.load.audio('laser2', './sound/lasers/Laser_01.mp3');
    this.load.audio('laser4', './sound/lasers/Laser_03.mp3');
    this.load.audio('laser7', './sound/lasers/Laser_06.mp3');

    this.load.audio('explosion1', './sound/explosions/explosion01.wav');
    this.load.audio('explosion2', './sound/explosions/explosion02.wav');
    this.load.audio('explosion3', './sound/explosions/explosion03.wav');
    this.load.audio('explosion4', './sound/explosions/explosion04.wav');
    this.load.audio('explosion5', './sound/explosions/explosion05.wav');
    this.load.audio('explosion6', './sound/explosions/explosion06.wav');
    this.load.audio('explosion7', './sound/explosions/explosion07.wav');
    this.load.audio('explosion8', './sound/explosions/explosion08.wav');
    this.load.audio('explosion9', './sound/explosions/explosion09.wav');

    this.load.audio('buttonHover', './sound/buttons/buttonHover.ogg');
    this.load.audio('buttonSelect', './sound/buttons/buttonSelect.ogg');
    this.load.audio('gameStart', './sound/buttons/gameStart.mp3');

    // Game Music
    this.load.audio('titleMusic', ['./music/titleMusic.ogg']);
    this.load.audio('gameMusic', './music/gameMusic.mp3');
  }

  init() {
    this.readyCount = 0;
  }

  ready() {
    this.readyCount += 1;
    if (this.readyCount === 2) {
      this.cameras.main.fadeOut(1000, 0, 0, 0);
      this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
        this.time.delayedCall(3000, () => {
          this.scene.start('PlayerNameScene');
        });
      });
    }
  }
}