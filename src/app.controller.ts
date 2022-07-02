import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Query, Redirect } from '@nestjs/common';
import { Response } from 'express';
@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(@Res() res: Response) {
    const arr: number[] = [];
    arr[4] = 5;
    res.status(HttpStatus.OK).json(arr);
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
