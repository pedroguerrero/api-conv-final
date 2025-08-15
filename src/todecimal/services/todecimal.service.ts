import { Injectable } from '@nestjs/common';

@Injectable()
export class TodecimalService {
  convert(binary: number): number {
    return parseInt(binary.toString(), 2);
  }
}
