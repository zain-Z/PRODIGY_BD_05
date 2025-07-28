import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hotel, HotelDocument } from './hotel.schema';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Injectable()
export class HotelsService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  // 🏨 Create a hotel
  async create(createHotelDto: CreateHotelDto): Promise<Hotel> {
    const newHotel = new this.hotelModel(createHotelDto);
    return newHotel.save();
  }

  // 🔍 Get all hotels
  async findAll(): Promise<Hotel[]> {
    return this.hotelModel.find().exec();
  }

  // 🔍 Get hotel by ID
  async findOne(id: string): Promise<Hotel> {
    const hotel = await this.hotelModel.findById(id).exec();
    if (!hotel) throw new NotFoundException('Hotel not found');
    return hotel;
  }

  // 🔎 Filter hotels based on date range
  async filterByDates(checkIn: string, checkOut: string): Promise<Hotel[]> {
    return this.hotelModel
      .find({
        availableFrom: { $lte: checkIn },
        availableTo: { $gte: checkOut },
      })
      .exec();
  }
}
