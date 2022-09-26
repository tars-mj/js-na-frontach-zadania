import { Price } from './price.type';

export type Item = {
  name: string;
  amount: number;
  unit: 'g' | 'kg' | 'dag' | 'ton';
  price: Price;
};
