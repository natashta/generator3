export default class Team {
  constructor() {
    this.hero = [
      {
        name: 'Bowman', health: 100, level: 1, type: 'Bowman', defence: 50, attack: 8, damage: 8,
      },
      {
        name: 'Swordsman', health: 100, level: 1, type: 'Swordsman', defence: 50, attack: 5, damage: 5,
      },
      {
        name: 'Magician', health: 100, level: 1, type: 'Magician', defence: 60, attack: 10, damage: 10,
      },
    ];
  }

  * [Symbol.iterator]() {
    const sorted = (a, b) => {
      const abilA = a.attack + a.damage;
      const abilB = b.attack + b.damage;
      return abilB - abilA;
    };
    const hero = this.hero.sort(sorted);
    for (let i = 0; i < hero.length; i += 1) {
      yield hero[i];
    }
  }
}
