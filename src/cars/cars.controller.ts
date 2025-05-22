import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const car: any = this.carsService.findOneById(Number(id));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return car;
  }

  @Post()
  createCar(@Body() payload: any) {
    const car: any = this.carsService.create(payload);
    return {
      message: 'Car created',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      car: car,
      status: 'success',
    };
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() payload: any) {
    const car: any = this.carsService.update(id, payload);
    return {
      message: 'Car updated',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      car: car,
      status: 'success',
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    this.carsService.delete(id);
    return {
      message: 'Car deleted',
    };
  }
}
