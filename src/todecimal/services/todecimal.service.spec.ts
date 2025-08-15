import { Test, TestingModule } from '@nestjs/testing';
import { TodecimalService } from './todecimal.service';

describe('TodecimalService', () => {
  let service: TodecimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodecimalService],
    }).compile();

    service = module.get<TodecimalService>(TodecimalService);
  });

  describe('convert', () => {
    it('should convert binary to decimal', () => {
      const result = service.convert(1101);
      expect(result).toBe(13);
    });
  });
});
