/* eslint-disable @typescript-eslint/camelcase */
import { BloodExamSpecification } from './types';

/** This object specifies the shape of a blood exam.
 *  EasyCoV's client renders a form based on this
 *  specification.
 */
export const bloodExamSpecification: BloodExamSpecification = {
  age: {
    label: 'Age',
    unit: 'years',
  },
  hematocrit: {
    label: 'Hematocrits',
    unit: '%',
    comments: 'reference (36 - 46)',
  },
  hemoglobin: {
    label: 'Hemoglobin',
    unit: 'g/dl',
    comments: 'reference (12 - 15)',
  },
  platelets: {
    label: 'Platelets',
    unit: 'x 10^3 μl',
    comments: 'reference (150 - 450)',
  },
  mean_platelet_volume: {
    label: 'Mean Platelet Volume (MPV)',
    unit: 'fl',
    comments: 'reference(9 - 13)',
  },
  red_blood_cells: {
    label: 'Red Blood Cells',
    unit: 'x 10^6 μl',
    comments: 'reference(3.5 - 5.8)',
  },
  lymphocytes: {
    label: 'Lymphocytes',
    unit: 'x 10^3 μl',
    comments: 'reference (1.2 - 5.0)',
  },
  mchc: {
    label: 'Mean Corpuscular Hemoglobin Concentration (MCHC)',
    unit: 'g/dl',
    comments: 'reference(31.5 - 34.5)',
  },
  leukocytes: {
    label: 'Leukocytes',
    unit: 'x 10^3 μl',
    comments: 'reference(3.5 - 12.0)',
  },
  basophils: {
    label: 'Basophils',
    unit: 'x 10^3 μl',
    comments: 'reference (0.0 - 0.3)',
  },
  mch: {
    label: 'Mean Corpuscular Hemoglobin (MCH)',
    unit: 'pg',
    comments: 'reference (27 - 32)',
  },
  eosinophils: {
    label: 'Eosinophils',
    unit: 'x 10^3 μl',
    comments: 'reference (0.0 - 0.5)',
  },
  mcv: {
    label: 'Mean Corpuscular Volume',
    unit: 'fl',
    comments: 'reference (80 - 100)',
  },
  monocytes: {
    label: 'Monocytes',
    unit: 'x 10^3 μl',
    comments: 'reference (11.1 - 15.2)',
  },
  rdw: {
    label: 'Red Blood Cell Distribution Width (RDW)',
    unit: '%',
    comments: 'reference(11.2 - 15.2)',
  },
  c_reactive_protein: {
    label: 'C Reactive Protein',
    unit: 'mg/dL',
    comments: '?',
  },
};
