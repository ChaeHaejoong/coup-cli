import Player from "../entity/player"
import { Action } from "../types/action"

type HandleActionParams = {
  actor: Player;
  target?: Player;
  action?: Action
}

export default function handleAction({actor, target, action}: HandleActionParams) {
  switch (action) {
    case Action.INCOME : 

    case Action.FOREIGN_AID :

    case Action.COUP :

    case Action.TAX :
      
    case Action.ASSASSINATE :

    case Action.EXCHANGE :

    case Action.STEAL :
    }
}