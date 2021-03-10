/* eslint-disable no-unused-expressions */
import Phaser from 'phaser';
import config from '../config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontFamily: 'Retroniod', fontSize: '40px', fill: '#31a2f2' });
    this.createdByText = this.add.text(0, 0, 'Created By: Alejandro Toledo', { fontFamily: 'Retro Team', fontSize: '32px', fill: '#31a2f2' });
    this.imagesTaken = this.add.text(0, 0, 'Images and sounds from: OpenGameArt.org', { fontFamily: 'Retro Team', fontSize: '32px', fill: '#31a2f2' });
    this.zone = this.add.zone(config.width / 2, config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.createdByText,
      this.zone,
    );

    Phaser.Display.Align.In.Center(
      this.imagesTaken,
      this.zone,
    );

    this.createdByText.setY(1000);
    this.imagesTaken.setY(1200);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 2500,
      delayed: 1000,
      onComplete: () => {
        this.destroy;
      },
    });

    this.createdByTween = this.tweens.add({
      targets: this.createdByText,
      y: -280,
      ease: 'Power1',
      duration: 8800,
      delay: 1200,
      onComplete: () => {
        this.destroy;
        this.scene.start('Title');
      },
    });

    this.createdByTween = this.tweens.add({
      targets: this.imagesTaken,
      y: -270,
      ease: 'Power1',
      duration: 8800,
      delay: 1100,
      onComplete: () => {
        this.destroy;
        this.scene.start('Title');
      },
    });
  }
}
