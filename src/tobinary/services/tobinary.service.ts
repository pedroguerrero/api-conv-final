import { Injectable } from '@nestjs/common';

@Injectable()
export class TobinaryService {
  convert(decimal: number): number {
    return Number(decimal.toString(2));
  }
}
