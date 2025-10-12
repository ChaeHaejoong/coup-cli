import { Card } from './card';

type playerInit = {
  name: string;
  deck: [Card, Card];
  coin: number;
};

export default class Player {
  private name: string;
  private coin: number;
  private deck: [Card, Card];
  private isAlive: boolean = true;

  constructor({ name, deck, coin }: playerInit) {
    this.name = name;
    this.deck = deck;
    this.coin = coin;
  }

  getCoin(amount: number) {
    this.coin += amount;
  }

  loseCoin(amount: number) {
    this.coin -= amount;
  }

  getCard(index: number): Card {
    return this.deck[index]
  } 

  loseCard(index: number) {
    this.deck[index].isAlive = false;

    if(!this.deck[0].isAlive && !this.deck[1].isAlive) {
      this.die();
    }
  }

  private die() {
    this.isAlive = false;
  }
}
