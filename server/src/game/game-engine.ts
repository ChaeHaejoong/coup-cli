import { Card } from './entity/card';
import Player from './entity/player';
import { JOBS } from './types/job';

export class GameEngine {
  private deck: Card[];
  private playerList: Player[];

  constructor(private playerNames: string[]) {
    this.initDeck();
    this.shuffleDeck();
    this.initPlayer();
    this.shufflePlayerList();
  }

  private initPlayer() {
    this.playerNames.forEach((name) => {
      this.playerList.push(
        new Player({
          name,
          coin: this.playerNames.length === 2 ? 1 : 2,
          deck: [this.deck.pop()!, this.deck.pop()!],
        }),
      );
    });
  }

  private initDeck() {
    JOBS.forEach((job) => {
      for (let i = 0; i < 3; i++) {
        this.deck.push(new Card(job));
      }
    });
  }

  private shuffleDeck() {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
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
