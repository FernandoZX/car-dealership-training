import { IsString, IsNumber } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateCarDto {
    @IsString({ message: 'The brand must be a string' })
    brand: string;
    @IsString({ message: 'The model must be a string' })
    model: string;
    @IsNumber(
        { allowNaN: false, allowInfinity: false },
        { message: 'The year must be a number' },
    )
    @Transform(({ value }) => Number(value))
    year: number;
}
