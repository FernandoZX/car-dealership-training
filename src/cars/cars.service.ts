/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: 1,
            brand: 'Ferrari',
            model: '488',
        },
        {
            id: 2,
            brand: 'Porsche',
            model: '911',
        },
        {
            id: 3,
            brand: 'Lamborghini',
            model: 'Huracan',
        },
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: number) {
        const car: any = this.cars.find((car) => car.id === id);
        if (!car) throw new NotFoundException('Car not found');
        return car;
    }

    create(payload: any) {
        this.cars.push(payload);
        return this.cars[this.cars.length - 1];
    }

    update(id: number, payload: any) {
        const car: any = this.cars.find((car) => car.id === id);
        if (!car) throw new NotFoundException('Car not found');
        this.cars[id] = payload;
        return this.cars[id];
    }

    delete(id: number) {
        const car: any = this.cars.find((car) => car.id === id);
        if (!car) throw new NotFoundException('Car not found');
        this.cars = this.cars.filter((car) => car.id !== id);
        return this.cars;
    }
}
