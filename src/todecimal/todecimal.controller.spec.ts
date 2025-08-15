import { Test, TestingModule } from '@nestjs/testing';
import { TodecimalController } from './todecimal.controller';
import { TodecimalService } from './services/todecimal.service';

describe('TodecimalController', () => {
  let controller: TodecimalController;
  let service: TodecimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodecimalService],
      controllers: [TodecimalController],
    }).compile();

    controller = module.get<TodecimalController>(TodecimalController);
    service = module.get<TodecimalService>(TodecimalService);
  });

  describe('convertToDecimal', () => {
    it('should convert binary to decimal', () => {
      jest.spyOn(service, 'convert').mockReturnValue(13);
      const response = controller.convertToDecimal({
        data: { binary: 1101 },
      });

      expect(response).toEqual({ data: { value: 13 } });
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(service.convert).toHaveBeenCalledWith(1101);
    });
  });
});
