import { Test, TestingModule } from '@nestjs/testing';
import { PredictionController } from './prediction.controller';

describe('Prediction Controller', () => {
  let controller: PredictionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PredictionController],
    }).compile();

    controller = module.get<PredictionController>(PredictionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
