import { encryptor, decryptor } from '../src/index';

import { expect } from 'chai';
import 'mocha';

describe('Full cycle music pitches encryption and decryption', () => {
  it('set 1: should return true', () => {
    const music: string =
      'E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4-E4-G4-F4-H0-G4-C4-H0-G4-D4-A4-G4-F4-D4';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
  it('set 2: should return true', () => {
    const music: string =
      'C2-C#2-D2-D#2-E2-F#2-F2-G2-G#2-A2-A#2-B2-C3-C#3-D3-D#3-E3-F#3-F3-G3-G#3-A3-A#3-B3-C4-C#4-D4-D#4-E4-F#4-F4-G4-G#4-A4-A#4-B4-C5-C#5-D5-D#5-E5-F#5-F5-G5-G#5-A5-A#5-B5-H0';
    const result: string = decryptor(encryptor(music));
    expect(result).to.equal(music);
  });
});