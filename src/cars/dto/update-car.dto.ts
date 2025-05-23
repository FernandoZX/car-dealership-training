import { Transform } from 'class-transformer';
import { IsNumber, IsString, IsOptional, IsUUID } from 'class-validator';

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;

    @IsNumber(
        { allowNaN: false, allowInfinity: false },
        { message: 'The year must be a number' },
    )
    @Transform(({ value }) => Number(value))
    @IsOptional()
    readonly year?: number;
}
