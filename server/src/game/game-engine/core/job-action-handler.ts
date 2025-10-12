import Player from '../entity/player';
import { GameEngine } from '../game-engine';

export const duke = {
  tax: (actor: Player) => {
    actor.getCoin(3);
  },
};

export const assassin = {
  tryAssassinate: (actor: Player) => {
    actor.loseCoin(3);
  },
  assassinate: (target: Player, cardIndex: number) => {
    target.loseCard(cardIndex);
  },
};

export function exchange(game: GameEngine) {}

export function steal(actor: Player, target: Player) {
  target.loseCoin(2);
  actor.getCoin(2);
}
