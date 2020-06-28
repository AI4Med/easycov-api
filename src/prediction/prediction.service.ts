import { Injectable } from '@nestjs/common';
import { TestPrediction } from './types';
import axios from 'axios';
import { RequestPredictionDTO } from './dto/request-prediction.dto';
import {
  RModelFieldNames,
  RResultReturnName,
} from './utils/translate-prediction';

@Injectable()
export class PredictionService {
  /** The prediction model resides in an outside API, running R code. This is its endpoint. */
  private predictionAPI = axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'http://10.0.0.51:8082'
        : 'http://localhost:8082',
  });

  /** Request a prediction to the R code running in the local network. */
  private async requestPrediction(bloodExam: any): Promise<TestPrediction> {
    try {
      const response = await this.predictionAPI.post('/predict', bloodExam);
      return {
        prediction: RResultReturnName[response.data.prediction],
      };
    } catch (error) {
      throw error;
    }
  }

  /** All prediction requests to the service API are delegated
   *  to the R code running separately. */
  public async delegatePredictionRequest(
    bloodExam: RequestPredictionDTO,
  ): Promise<TestPrediction> {
    /** Translate the API's request format to the R code format. */
    const bloodExamTranslatedFields = Object.keys(bloodExam).reduce(
      (accumulator, currentValue) => {
        accumulator[RModelFieldNames[currentValue]] = bloodExam[currentValue];
        return accumulator;
      },
      {},
    );

    return this.requestPrediction(bloodExamTranslatedFields);
  }
}
