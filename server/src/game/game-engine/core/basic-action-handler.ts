import Player from '../entity/player';

export function income(actor: Player) {
  actor.getCoin(1);
}

export function foreignAid(actor: Player) {
  actor.getCoin(2);
}

export function coup(actor: Player, target: Player, cardIndex: number) {
  actor.loseCoin(7);
  target.loseCard(cardIndex);
}
