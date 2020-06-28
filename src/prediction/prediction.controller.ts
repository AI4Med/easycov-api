import { Controller, Post, Body, Get } from '@nestjs/common';
import { PredictionService } from './prediction.service';
import { RequestPredictionDTO } from './dto/request-prediction.dto';
import { BloodExamSpecification } from './types';
import { bloodExamSpecification } from './blood-exam';

@Controller('prediction')
export class PredictionController {
  private bloodExamSpecification: BloodExamSpecification;

  constructor(private predictionService: PredictionService) {
    this.bloodExamSpecification = bloodExamSpecification;
  }

  @Get()
  requestSpecification() {
    return this.bloodExamSpecification;
  }

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
