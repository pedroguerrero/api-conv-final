import { Test, TestingModule } from '@nestjs/testing';
import { TobinaryController } from './tobinary.controller';
import { TobinaryService } from './services/tobinary.service';

describe('TobinaryController', () => {
  let controller: TobinaryController;
  let service: TobinaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TobinaryService],
      controllers: [TobinaryController],
    }).compile();

    controller = module.get<TobinaryController>(TobinaryController);
    service = module.get<TobinaryService>(TobinaryService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have service injected', () => {
    expect(service).toBeDefined();
  });

  describe('convertToBinary', () => {
    it('should convert decimal to binary', () => {
      jest.spyOn(service, 'convert').mockReturnValue(1101);
      const response = controller.convertToBinary({
        data: { decimal: 13 },
      });

      expect(response).toEqual({ data: { value: 1101 } });
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(service.convert).toHaveBeenCalledWith(13);
    });
  });
});
