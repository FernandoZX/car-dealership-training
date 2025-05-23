import { v4 as uuid } from 'uuid';
import { Car } from './../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
    year: 2021,
  },
  {
    id: uuid(),
    brand: 'Jeep',
    model: 'Cherokee',
    year: 2022,
  },
];
