import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';

@Controller('hotels')
export class HotelsController {
  constructor(private readonly hotelsService: HotelsService) {}

  // POST /hotels
  @Post()
  async create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  // GET /hotels
  @Get()
  async findAll() {
    return this.hotelsService.findAll();
  }

  // GET /hotels/:id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(id);
  }

  // GET /hotels/search?checkIn=2025-08-01&checkOut=2025-08-05
  @Get('/search/availability')
  async filterByDates(
    @Query('checkIn') checkIn: string,
    @Query('checkOut') checkOut: string,
  ) {
    return this.hotelsService.filterByDates(checkIn, checkOut);
  }
}
