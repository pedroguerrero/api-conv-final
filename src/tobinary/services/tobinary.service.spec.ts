import { Test, TestingModule } from '@nestjs/testing';
import { TobinaryService } from './tobinary.service';

describe('TobinaryService', () => {
  let service: TobinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TobinaryService],
    }).compile();

    service = module.get<TobinaryService>(TobinaryService);
  });

  describe('convert', () => {
    it('should convert decimal to binary', () => {
      const result = service.convert(13);

      expect(result).toEqual(1101);
    });
  });
});
