import Player from '../entity/player';
import { Job } from '../types/job';

type IsChallengeSucceedParams = {
  target: Player;
  cardIndex: number;
  challengedJob: Job;
};

export const challenge = {
  isChallengeSucceed: ({
    target,
    cardIndex,
    challengedJob,
  }: IsChallengeSucceedParams): boolean => {
    if (target.getCard(cardIndex).job === challengedJob) {
      return false;
    }
    return true;
  },

  challengeWin: () => {},

  challengeLose: () => {},
};
