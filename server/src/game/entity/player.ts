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

  
}
