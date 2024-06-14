import { IsOptional, IsPositive, Min } from "class-validator";
import { Type } from "class-transformer";


export class PaginationDto {

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  filter?: string;
}