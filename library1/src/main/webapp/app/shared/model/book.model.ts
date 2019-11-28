import { Moment } from 'moment';

export interface IBook {
  id?: number;
  name?: string;
  content?: string;
  createdAt?: Moment;
  authorId?: number;
}

export class Book implements IBook {
  constructor(public id?: number, public name?: string, public content?: string, public createdAt?: Moment, public authorId?: number) {}
}
