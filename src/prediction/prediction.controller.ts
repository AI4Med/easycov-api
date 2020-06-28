import { Controller, Post, Body } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { RequestPredictionDTO } from './dto/request-prediction.dto';

@Controller('prediction')
export class PredictionController {
  constructor(private predictionService: PredictionService) {}

  /** Incoming request for covid-19 prediction.
   *  The blood exam data encoded in the POST request
   *  will be passed to an external R code running
   *  a prediction model.
   *
   * This controller will enforce that the blood exam data
   * follows what RequestPredictionDTO specifies.
   */
  @Post()
  requestPrediction(@Body() bloodExam: RequestPredictionDTO) {
    return this.predictionService.delegatePredictionRequest(bloodExam);
  }
}
