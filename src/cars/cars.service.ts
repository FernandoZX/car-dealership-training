/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Car } from './interfaces';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Ferrari',
      model: '488',
      year: 2024,
    },
    {
      id: uuid(),
      brand: 'Porsche',
      model: '911',
      year: 2024,
    },
    {
      id: uuid(),
      brand: 'Lamborghini',
      model: 'Huracan',
      year: 2024,
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string): Car {
    const car: any = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }

  create(payload: CreateCarDto): Car {
    this.cars.push({
      id: uuid(),
      ...payload,
    });
    return this.cars[this.cars.length - 1];
  }

  update(id: string, payload: UpdateCarDto): Car {
    let carDB: Car = this.findOneById(id);
    if (payload.id && payload.id !== id) {
      throw new BadRequestException('Car is not allowed to change id');
    }
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...payload, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const carDB: Car = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
