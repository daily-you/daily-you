/**
 * @description
 * This is the goal interface.
 */
export interface Goal {
  id: string;
  idUser: string;
  title: string;
  content?: string;
  realized: boolean;
  updatedAt: Date;
  createdAt: Date;
  endAt: Date;
}
