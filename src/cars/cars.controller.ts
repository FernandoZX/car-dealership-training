/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  //UsePipes,
  //ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById(@Param('id', new ParseUUIDPipe()) id: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const car: Car | null = this.carsService.findOneById(id);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return car;
  }

  @Post()
  createCar(@Body() payload: CreateCarDto) {
    const car: Car | null = this.carsService.create(payload);
    return {
      message: 'Car created',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      car: car,
      status: 'success',
    };
  }

  @Patch(':id')
  updateCar(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() payload: UpdateCarDto,
  ) {
    const car: Car | null = this.carsService.update(id, payload);
    return {
      message: 'Car update',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      car: car,
      status: 'success',
    };
  }

  @Delete(':id')
  deleteCar(@Param('id', new ParseUUIDPipe()) id: string) {
    this.carsService.delete(id);
    return {
      message: 'Car deleted',
    };
  }
}
