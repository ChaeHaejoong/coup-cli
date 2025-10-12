import { Card } from './entity/card';
import Player from './entity/player';
import { JOBS } from './types/job';

export class GameEngine {
  private courtDeck: Card[];
  private playerList: Player[];

  constructor(private playerNames: string[]) {
    this.initDeck();
    this.shuffleDeck();
    this.initPlayer();
    this.shufflePlayerList();
  }

  drawCard(amount: number): Card[] {
    let cards: Card[] = [];

    for (let i = 0; i < amount; i++) {
      cards.push(this.courtDeck.pop()!);
    }

    return cards;
  }

  putBackCard(cards: Card[]) {
    this.courtDeck.push(...cards);
    this.shuffleDeck();
  }

  private initPlayer() {
    this.playerNames.forEach((name) => {
      this.playerList.push(
        new Player({
          name,
          coin: this.playerNames.length === 2 ? 1 : 2,
          deck: [this.courtDeck.pop()!, this.courtDeck.pop()!],
        }),
      );
    });
  }

  private initDeck() {
    JOBS.forEach((job) => {
      for (let i = 0; i < 3; i++) {
        this.courtDeck.push(new Card(job));
      }
    });
  }

  private shuffleDeck() {
    for (let i = this.courtDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.courtDeck[i], this.courtDeck[j]] = [
        this.courtDeck[j],
        this.courtDeck[i],
      ];
    }
  }

  private shufflePlayerList() {
    for (let i = this.playerList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playerList[i], this.playerList[j]] = [
        this.playerList[j],
        this.playerList[i],
      ];
    }
  }
}
