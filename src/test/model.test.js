import Model from '../model';

jest.mock('../model');

beforeEach(() => {
  Model.mockClear();
});

describe("It's defines global structure settings all sounds", () => {
  it('Can define if the sound for the game is turned on', () => {
    const model = new Model();
    model.soundOn = true;
    expect(model.soundOn).toBe(true);
  });

  it('It is used to turn off the game music', () => {
    const model = new Model();
    model.soundOn = true;
    expect(model.soundOn).toBe(true);
    model.soundOn = false;
    expect(model.soundOn).toBe(false);
  });

  it('It is used to turn on the game music', () => {
    const model = new Model();
    model.musicOn = true;
    expect(model.musicOn).toBe(true);
  });

  it('This test the setting to turn off the global music and sounds', () => {
    const model = new Model();
    model.musicOn = true;
    expect(model.musicOn).toBe(true);
    model.musicOn = false;
    expect(model.musicOn).toBe(false);
  });
});

describe('this test is to control different scenes music', () => {
  it('Can be used to define whether the title scene music is playing', () => {
    const model = new Model();
    model.titleMusicPlaying = true;
    expect(model.titleMusicPlaying).toBe(true);
  });

  it('It test the title music of game', () => {
    const model = new Model();
    model.titleMusicPlaying = true;
    expect(model.titleMusicPlaying).toBe(true);
    model.titleMusicPlaying = false;
    expect(model.titleMusicPlaying).toBe(false);
  });

  it('It test to turn on the title music of game', () => {
    const model = new Model();
    model.gameMusicPlaying = true;
    expect(model.gameMusicPlaying).toBe(true);
  });

  it('It test to turn off the title music of game', () => {
    const model = new Model();
    model.gameMusicPlaying = true;
    expect(model.gameMusicPlaying).toBe(true);
    model.gameMusicPlaying = false;
    expect(model.gameMusicPlaying).toBe(false);
  });
});
