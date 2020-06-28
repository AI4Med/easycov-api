/* eslint-disable @typescript-eslint/camelcase */

/** A simple key-pair object to translate the API field
 *  names to the expected field names from the R code.
 */
export const RModelFieldNames = {
  age: 'Age',
  hematocrit: 'Hematocrit',
  hemoglobin: 'Hemoglobin',
  platelets: 'Platelets',
  mean_platelet_volume: 'Mean_platelet_volume',
  red_blood_cells: 'Red_blood_Cells',
  lymphocytes: 'Lymphocytes',
  mchc: 'MCHC',
  leukocytes: 'Leukocytes',
  basophils: 'Basophils',
  mch: 'MCH',
  eosinophils: 'Eosinophils',
  mcv: 'MCV',
  monocytes: 'Monocytes',
  rdw: 'RDW',
  c_reactive_protein: 'C_reactive_protein',
};

export const RResultReturnName = {
  0: 'negative',
  1: 'positive',
};
