/* eslint-disable @typescript-eslint/no-unsafe-call */
// src/bookings/dto/create-booking.dto.ts
import { IsNotEmpty, IsMongoId, IsDateString } from 'class-validator';

export class CreateBookingDto {
  @IsNotEmpty()
  @IsMongoId()
  user: string;

  @IsNotEmpty()
  @IsMongoId()
  hotel: string;

  @IsNotEmpty()
  @IsDateString()
  checkInDate: string;

  @IsNotEmpty()
  @IsDateString()
  checkOutDate: string;
}
