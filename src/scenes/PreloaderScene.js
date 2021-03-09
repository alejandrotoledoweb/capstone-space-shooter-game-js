import Phaser from 'phaser';

export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  preload() {
    this.cameras.main.fadeIn(800, 0, 0, 0);
    this.add.image(400, 330, 'bootLogo');
    this.add.image(400, 760, 'bootCopyright');
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 490, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2 + 100,
      y: height / 2 + 65,
      text: 'Loading Game...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

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
      // eslint-disable-next-line radix
      percentText.setText(`${parseInt(value * 100)}%`);
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
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    });

    this.timedEvent = this.time.delayedCall(4000, this.ready, [], this);

    this.load.crossOrigin = 'Anonymous';
    this.load.image('titleScreen', './Logos/dsdLogo.png');
    this.load.image('playButton', './Buttons/playButton.png');
    this.load.image('playButtonFocus', './Buttons/playButtonFocus.png');
    this.load.image('optionsButton', './Buttons/optionsButton.png');
    this.load.image('optionsButtonFocus', './Buttons/optionsButtonFocus.png');
    this.load.image('creditsButton', './Buttons/creditsButton.png');
    this.load.image('creditsButtonFocus', './Buttons/creditsButtonFocus.png');
    this.load.image('checkbox', './Buttons/checkbox.png');
    this.load.image('checkboxChecked', './Buttons/checkboxChecked.png');
    this.load.image('menuButton', './Buttons/menuButton.png');
    this.load.image('menuButtonFocus', './Buttons/menuButtonFocus.png');
    this.load.image('gameOverTitle', './Logos/gameOver.png');
    this.load.image('restartButton', './Buttons/restartButton.png');
    this.load.image('restartButtonFocus', './Buttons/restartButtonFocus.png');
    this.load.image('skipButton', './Buttons/skipButton.png');
    this.load.image('skipButtonFocus', './Buttons/skipButtonFocus.png');
    this.load.image('confirmButton', './Buttons/confirmButton.png');
    this.load.image('confirmButtonFocus', './Buttons/confirmButtonFocus.png');
    this.load.image('nextButton', './Buttons/nextButton.png');
    this.load.image('nextButtonFocus', './Buttons/nextButtonFocus.png');
    this.load.image('highscoresButton', './Buttons/highscoresButton.png');
    this.load.image('highscoresButtonFocus', './Buttons/highscoresButtonFocus.png');
    this.load.image('mainMenuButton', './Buttons/mainMenuButton.png');
    this.load.image('mainMenuButtonFocus', './Buttons/mainMenuButtonFocus.png');

    // GAME SCENE ASSETS
    this.load.image('background0', './Backgrounds/bkgd_0.png');
    this.load.image('background1', './Backgrounds/bkgd_1.png');
    this.load.image('background2', './Backgrounds/bkgd_2.png');
    this.load.image('background3', './Backgrounds/bkgd_3.png');
    this.load.image('background4', './Backgrounds/bkgd_4.png');
    this.load.image('background5', './Backgrounds/bkgd_5.png');
    this.load.image('background6', './Backgrounds/bkgd_6.png');
    this.load.image('background7', './Backgrounds/bkgd_7.png');

    // Explosion spritesheets
    this.load.spritesheet('explosion1', './Explosions/explosion1.png', {
      frameWidth: 96,
      frameHeight: 96,
    });
    this.load.spritesheet('explosion2', './Explosions/explosion2.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('explosion3', './Explosions/explosion3.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet('explosion4', './Explosions/explosion4.png', {
      frameWidth: 256,
      frameHeight: 256,
    });
    this.load.spritesheet('explosion5', './Explosions/explosion5.png', {
      frameWidth: 256,
      frameHeight: 256,
    });
    this.load.spritesheet('explosion6', './Explosions/explosion6.png', {
      frameWidth: 256,
      frameHeight: 256,
    });

    // NPC Assets
    this.load.image('starfleetCaptain', './npc/SecurityOfficer.png');

    // Enemy Ships & Lasers
    // Ninja Ship
    this.load.spritesheet('ninja', './Ships/Ninja.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Ninja Laser
    this.load.image('ninjaLaser1', './lasers/blue/1.png');

    // UFO Ship
    this.load.spritesheet('ufo', './Ships/UFO.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // UFO Lasers
    this.load.image('ufoLasers1', './lasers/red/1.png');

    // Paranoid Ship
    this.load.spritesheet('paranoid', './Ships/Paranoid.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Paranoid Lasers
    this.load.image('paranoidLasers5', './lasers/green/5.png');

    // Saboteur Ship
    this.load.spritesheet('saboteur', './Ships/Saboteur.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Saboteur Lasers
    this.load.image('saboteurLasers4', './lasers/pink/4.png');

    // Lightning Ship
    this.load.spritesheet('lightning', './Ships/Lightning.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    // Lightning Lasers
    this.load.image('lightningLasers5', './lasers/yellow/5.png');

    // Player Ship
    this.load.spritesheet('player', './Ships/Lighter.png', {
      frameWidth: 50,
      frameHeight: 50,
    });

    // Player lasers
    this.load.image('playerLaser3', './lasers/turq/3.png');

    // SFX
    this.load.audio('laser2', './Sound/lasers/sfx_wpn_laser3.wav');
    this.load.audio('laser4', './Sound/lasers/sfx_wpn_laser5.wav');
    this.load.audio('laser7', './Sound/lasers/sfx_wpn_laser11.wav');

    this.load.audio('explosion1', './Sound/Explosions/explosion01.wav');
    this.load.audio('explosion2', './Sound/Explosions/explosion02.wav');
    this.load.audio('explosion3', './Sound/Explosions/explosion03.wav');
    this.load.audio('explosion4', './Sound/Explosions/explosion04.wav');
    this.load.audio('explosion5', './Sound/Explosions/explosion05.wav');
    this.load.audio('explosion6', './Sound/Explosions/explosion06.wav');
    this.load.audio('explosion7', './Sound/Explosions/explosion07.wav');
    this.load.audio('explosion8', './Sound/Explosions/explosion08.wav');
    this.load.audio('explosion9', './Sound/Explosions/explosion09.wav');

    this.load.audio('buttonHover', './Sound/Buttons/sfx_sounds_button5.wav');
    this.load.audio('buttonSelect', './Sound/Buttons/sfx_sounds_button7.wav');
    this.load.audio('gameStart', './Sound/Buttons/sfx_sounds_button5.wav');

    // Game Music
    this.load.audio('titleMusic', './Music/titleMusic.mp3');
    this.load.audio('gameMusic', './Music/gameMusic.mp3');
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
