import Character from './domain.js';

export default class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
  // Логика данных сохранения
}

export function readGameSaving() {
  // Логика чтения сохранения
}

export function writeGameSaving() {
  // Логика записи сохранения
}
