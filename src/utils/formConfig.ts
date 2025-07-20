export const NUMBER_FIELD_CONFIG = {
  gestationalAge: {
    defaultValue: 38,
    min: 20,
    max: 40,
    step: 1,
    unitKey: 'gestationalAge'
  },
  hemoglobin: {
    defaultValue: 11,
    min: 8,
    max: 14.5,
    step: 0.1,
    unitKey: 'hemoglobin'
  },
  hematocrit: {
    defaultValue: 34,
    min: 24,
    max: 44,
    step: 1,
    unitKey: 'hematocrit'
  },
  platelets: {
    defaultValue: 200,
    min: 50,
    max: 550,
    step: 1,
    unitKey: 'platelets'
  },
  whiteBloodCells: {
    defaultValue: 10,
    min: 4,
    max: 30,
    step: 1,
    unitKey: 'whiteBloodCells'
  }
} as const 