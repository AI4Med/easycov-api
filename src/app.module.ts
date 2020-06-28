import { Module } from '@nestjs/common';
import { PredictionModule } from './prediction/prediction.module';

@Module({
  imports: [PredictionModule],
})
export class AppModule {}
