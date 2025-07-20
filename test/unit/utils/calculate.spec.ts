import { describe, it, expect } from 'vitest'
import { calculateProbability } from '../../../src/utils/calculate'

describe('calculateProbability', () => {
  it('should return a probability between 0 and 1', () => {
    const data = {
      ageRange: '23_34',
      placentaType: 'Accreta',
      gestationalHypertension: 'no',
      bleedingDuringPregnancy: 'no',
      gestationalDiabetes: 'no',
      miscarriage: 'no',
      previousDeliveries: 'no',
      previousCSection: 'no',
      placentaLocation: 'Others',
      placentaGrade: 'none',
      gestationalAge: 38,
      hemoglobin: 12,
      hematocrit: 36,
      platelets: 200,
      whiteBloodCells: 10
    }
    const result = calculateProbability(data)
    expect(result).toBeGreaterThanOrEqual(0)
    expect(result).toBeLessThanOrEqual(1)
  })

  it('should increase probability for high risk factors', () => {
    const lowRisk = {
      ageRange: '23_34',
      placentaType: 'Accreta',
      gestationalHypertension: 'no',
      bleedingDuringPregnancy: 'no',
      gestationalDiabetes: 'no',
      miscarriage: 'no',
      previousDeliveries: 'no',
      previousCSection: 'no',
      placentaLocation: 'Others',
      placentaGrade: 'none',
      gestationalAge: 38,
      hemoglobin: 12,
      hematocrit: 36,
      platelets: 200,
      whiteBloodCells: 10
    }
    const highRisk = {
      ...lowRisk,
      ageRange: '35_44',
      placentaType: 'Percreta',
      gestationalHypertension: 'yes',
      bleedingDuringPregnancy: 'yes',
      gestationalDiabetes: 'yes',
      miscarriage: 'yes',
      previousDeliveries: 'yes',
      previousCSection: 'yes',
      placentaLocation: 'TotalCentralPrevia',
      placentaGrade: 'II',
      gestationalAge: 40,
      hemoglobin: 8,
      hematocrit: 24,
      platelets: 50,
      whiteBloodCells: 30
    }
    const low = calculateProbability(lowRisk)
    const high = calculateProbability(highRisk)
    expect(high).toBeGreaterThan(low)
  })
}) 