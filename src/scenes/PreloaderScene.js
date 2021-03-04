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
  }
}