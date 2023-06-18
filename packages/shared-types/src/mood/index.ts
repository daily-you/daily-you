/**
 * @description
 * This is the mood interface.
 */
export interface Mood {
  id: string;
  idUser: string;
  status: MoodStatus;
  context: string;
  updatedAt: Date;
  createdAt: Date;
}

export enum MoodStatus {
  VERY_SAD = "😔",
  SAD = "😕",
  NEUTRAL = "😐",
  HAPPY = "🙂",
  VERY_HAPPY = "😁",
}
