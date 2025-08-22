import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from './root.controller';

describe('RootController', () => {
  let controller: RootController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
    }).compile();

    controller = module.get<RootController>(RootController);
  });

  describe('root', () => {
    it('should return an object', () => {
      const response = controller.root();
      expect(response).toEqual({ title: 'Conversor' });
    });
  });
});
