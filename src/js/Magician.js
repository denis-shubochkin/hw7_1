import Character from './Character';

export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.deffense = 40;
  }
}
