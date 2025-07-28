/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsMongoId } from 'class-validator';

export class CreateRoomDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  capacity: number;

  @IsMongoId()
  hotelId: string;
}
