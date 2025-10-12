import { Job } from '../types/job';

export class Card {
  isAlive: boolean = true;
  constructor(public job: Job) {}
}
