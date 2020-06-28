import { IsNumber } from 'class-validator';

export class RequestPredictionDTO {
  @IsNumber()
  age: number;

  @IsNumber()
  hematocrit: number;

  @IsNumber()
  hemoglobin: number;

  @IsNumber()
  platelets: number;

  @IsNumber()
  mean_platelet_volume: number;

  @IsNumber()
  red_blood_cells: number;

  @IsNumber()
  lymphocytes: number;

  @IsNumber()
  mchc: number;

  @IsNumber()
  leukocytes: number;

  @IsNumber()
  basophils: number;

  @IsNumber()
  mch: number;

  @IsNumber()
  eosinophils: number;

  @IsNumber()
  mcv: number;

  @IsNumber()
  monocytes: number;

  @IsNumber()
  rdw: number;

  @IsNumber()
  c_reactive_protein: number;
}
