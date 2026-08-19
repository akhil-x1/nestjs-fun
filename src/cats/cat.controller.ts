import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';


import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller("cats")
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Get()
  findAll(@Req() request:Request) {
    return 'This action returns all cats';
  }

  @Post()
  create(@Body() createCatDto : CreateCatDto ){
    return 'This action adds a new cat';
  }

  @Get("tiger/*")
  wildCardFun(@Req() request:Request): string {
    return 'Wild card example!';
  }

 @Get(":animal")
  routeParams(@Param() params:any): string {
    // console.log(params.animal)
    return `This animal returns a ${params.animal}`;
  }

  @Get("leapard")
  queryParams(@Query("breed") breed:string, @Query("age") age:number){
        return `The breed is ${breed} and the age is ${age}`
  }

  @Get("leapord")
  @Redirect()
  redirectFun1(){
    return { url: 'https://google.com/' };
  }

  @Get("lion")
  @Redirect("https://docs.nestjs.com",302)
  redirectFun2(@Query("version") version){
    if(version && version==5){
        return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get("snowleapord/return")
  librarySpecificReturn(@Res() res:Response){
    res.status(HttpStatus.FOUND).send({status:"success"})

  }
}
