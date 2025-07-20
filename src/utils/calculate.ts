const COEFFICIENTS = {
    intercept: 2.10430872831986,
    ageRange_35_44: 0.353695276959028,
    placentaType_Increta: 2.46510530893721,
    placentaType_Percreta: 1.17371181397006,
    gestationalHypertension_yes: -0.116552917983269,
    bleedingDuringPregnancy_yes: 2.35425907514059,
    gestationalDiabetes_yes: -0.219116787536701,
    miscarriage_yes: 0.119321261706822,
    previousDeliveries_yes: 0.78799388611426,
    previousCSection_yes: 4.67168508991773,
    placentaLocation_TotalCentralPrevia: -1.84002954456743,
    placentaGrade_I: -2.05729384920108,
    placentaGrade_II: -2.0018182398857,
    gestationalAge: 0.176841057918912,
    hemoglobin: -2.16361113853781,
    hematocrit: 0.374582333799321,
    platelets: -0.00370678213159624,
    whiteBloodCells: 0.125765820271133
}

export function calculateProbability(data: any): number {
    let y = COEFFICIENTS.intercept

    if (data.ageRange === '35_44') y += COEFFICIENTS.ageRange_35_44

    if (data.placentaType === 'Increta') y += COEFFICIENTS.placentaType_Increta
    else if (data.placentaType === 'Percreta') y += COEFFICIENTS.placentaType_Percreta

    if (data.gestationalHypertension === 'yes') y += COEFFICIENTS.gestationalHypertension_yes
    if (data.bleedingDuringPregnancy === 'yes') y += COEFFICIENTS.bleedingDuringPregnancy_yes
    if (data.gestationalDiabetes === 'yes') y += COEFFICIENTS.gestationalDiabetes_yes
    if (data.miscarriage === 'yes') y += COEFFICIENTS.miscarriage_yes
    if (data.previousDeliveries === 'yes') y += COEFFICIENTS.previousDeliveries_yes
    if (data.previousCSection === 'yes') y += COEFFICIENTS.previousCSection_yes

    if (data.placentaLocation === 'TotalCentralPrevia') {
        y += COEFFICIENTS.placentaLocation_TotalCentralPrevia
    }

    if (data.placentaGrade === 'I') y += COEFFICIENTS.placentaGrade_I
    else if (data.placentaGrade === 'II') y += COEFFICIENTS.placentaGrade_II

    y += COEFFICIENTS.gestationalAge * data.gestationalAge
    y += COEFFICIENTS.hemoglobin * data.hemoglobin
    y += COEFFICIENTS.hematocrit * data.hematocrit
    y += COEFFICIENTS.platelets * data.platelets
    y += COEFFICIENTS.whiteBloodCells * data.whiteBloodCells

    const probability = 1 / (1 + Math.exp(-y))
    return probability
}
