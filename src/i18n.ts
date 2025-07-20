import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        title: 'Transfusion Risk Calculator',
        titleShort: 'Risk Calculator',
        footer: {
            copyright: '© {year} Transfusion Risk Calculator'
        },
        ui: {
            lightMode: 'Light mode',
            darkMode: 'Dark mode'
        },
        form: {
            title: 'Patient Data',
            ageRange: 'Age Range',
            placentaType: 'Placenta Type',
            placentaLocation: 'Placenta Location',
            placentaGrade: 'Placenta Grade',
            gestationalHypertension: 'Gestational Hypertension',
            bleedingDuringPregnancy: 'Bleeding During Pregnancy',
            gestationalDiabetes: 'Gestational Diabetes',
            miscarriage: 'Miscarriage',
            previousDeliveries: 'Previous Deliveries',
            previousCSection: 'Previous C-Section',
            gestationalAge: 'Gestational Age at Delivery',
            hemoglobin: 'Pre-op Hemoglobin',
            hematocrit: 'Pre-op Hematocrit',
            platelets: 'Pre-op Platelets',
            whiteBloodCells: 'Pre-op White Blood Cells',
            calculate: 'Calculate Risk'
        },
        risk: {
            low: 'Low Risk',
            moderate: 'Moderate Risk',
            high: 'High Risk'
        },
        advice: {
            low: 'Transfusion risk is low. Standard monitoring is recommended.',
            moderate: 'Moderate risk. Prepare for possible transfusion and monitor closely.',
            high: 'High risk! Ensure blood products are available and take extra precautions.'
        },
        options: {
            yes: 'Yes',
            no: 'No',
            age: {
                '23_34': '23 to 34',
                '35_44': '35 to 44'
            },
            placentaType: {
                Accreta: 'Accreta',
                Increta: 'Increta',
                Percreta: 'Percreta'
            },
            placentaLocation: {
                TotalCentralPrevia: 'Total Central Previa',
                Others: 'Others'
            },
            placentaGrade: {
                none: 'None',
                I: 'I',
                II: 'II'
            }
        },
        units: {
            gestationalAge: 'weeks',
            hemoglobin: 'g/dL',
            hematocrit: '%',
            platelets: '×10³/μL',
            whiteBloodCells: '×10³/μL'
        },
        validation: {
            required: 'This field is required',
            min: 'Minimum value is {min}',
            calculationError: 'Error calculating risk. Please check your input.',
            title: 'Validation Errors',
            calculationErrorTitle: 'Calculation Error'
        }
    },
    pt: {
        title: 'Calculadora de Risco de Transfusão',
        titleShort: 'Risco Transfusão',
        footer: {
            copyright: '© {year} Calculadora de Risco de Transfusão'
        },
        ui: {
            lightMode: 'Modo claro',
            darkMode: 'Modo escuro'
        },
        form: {
            title: 'Dados da Paciente',
            ageRange: 'Faixa Etária',
            placentaType: 'Tipo de Placenta',
            placentaLocation: 'Implantação da Placenta',
            placentaGrade: 'Grau da Placenta',
            gestationalHypertension: 'Hipertensão Gestacional',
            bleedingDuringPregnancy: 'Sangramento na Gestação',
            gestationalDiabetes: 'Diabetes Gestacional',
            miscarriage: 'Aborto',
            previousDeliveries: 'Partos Anteriores',
            previousCSection: 'Cesárea Prévia',
            gestationalAge: 'IG no Parto',
            hemoglobin: 'Hemoglobina Pré-operatória',
            hematocrit: 'Hematócrito Pré-operatório',
            platelets: 'Plaquetas Pré-operatórias',
            whiteBloodCells: 'Glóbulos Brancos Pré-operatórios',
            calculate: 'Calcular Risco'
        },
        risk: {
            low: 'Risco Baixo',
            moderate: 'Risco Moderado',
            high: 'Risco Alto'
        },
        advice: {
            low: 'O risco de transfusão é baixo. Monitoramento padrão recomendado.',
            moderate: 'Risco moderado. Prepare-se para possível transfusão e monitore de perto.',
            high: 'Risco alto! Garanta disponibilidade de hemocomponentes e tome precauções extras.'
        },
        options: {
            yes: 'Sim',
            no: 'Não',
            age: {
                '23_34': '23 a 34',
                '35_44': '35 a 44'
            },
            placentaType: {
                Accreta: 'Acreta',
                Increta: 'Increta',
                Percreta: 'Percreta'
            },
            placentaLocation: {
                TotalCentralPrevia: 'Prévia centro total',
                Others: 'Outras'
            },
            placentaGrade: {
                none: 'Nenhum',
                I: 'I',
                II: 'II'
            }
        },
        units: {
            gestationalAge: 'semanas',
            hemoglobin: 'g/dL',
            hematocrit: '%',
            platelets: '×10³/μL',
            whiteBloodCells: '×10³/μL'
        },
        validation: {
            required: 'Este campo é obrigatório',
            min: 'O valor mínimo é {min}',
            calculationError: 'Erro ao calcular o risco. Por favor, verifique seus dados.',
            title: 'Erros de Validação',
            calculationErrorTitle: 'Erro de Cálculo'
        }
    },
    es: {
        title: 'Calculadora de Riesgo de Transfusión',
        titleShort: 'Riesgo Transfusión',
        footer: {
            copyright: '© {year} Calculadora de Riesgo de Transfusión'
        },
        ui: {
            lightMode: 'Modo claro',
            darkMode: 'Modo oscuro'
        },
        form: {
            title: 'Datos de la Paciente',
            ageRange: 'Rango de Edad',
            placentaType: 'Tipo de Placenta',
            placentaLocation: 'Implantación de la Placenta',
            placentaGrade: 'Grado de la Placenta',
            gestationalHypertension: 'Hipertensión Gestacional',
            bleedingDuringPregnancy: 'Sangrado Gestacional',
            gestationalDiabetes: 'Diabetes Gestacional',
            miscarriage: 'Aborto',
            previousDeliveries: 'Partos Anteriores',
            previousCSection: 'Cesárea Previa',
            gestationalAge: 'Edad Gestacional',
            hemoglobin: 'Hemoglobina Preoperatoria',
            hematocrit: 'Hematocrito Preoperatorio',
            platelets: 'Plaquetas Preoperatorias',
            whiteBloodCells: 'Glóbulos Blancos Preoperatorios',
            calculate: 'Calcular Riesgo'
        },
        risk: {
            low: 'Riesgo Bajo',
            moderate: 'Riesgo Moderado',
            high: 'Riesgo Alto'
        },
        advice: {
            low: 'El riesgo de transfusión es bajo. Se recomienda monitoreo estándar.',
            moderate: 'Riesgo moderado. Prepárese para una posible transfusión y monitoree de cerca.',
            high: '¡Riesgo alto! Asegure la disponibilidad de hemoderivados y tome precauciones adicionales.'
        },
        options: {
            yes: 'Sí',
            no: 'No',
            age: {
                '23_34': '23 a 34',
                '35_44': '35 a 44'
            },
            placentaType: {
                Accreta: 'Accreta',
                Increta: 'Increta',
                Percreta: 'Percreta'
            },
            placentaLocation: {
                TotalCentralPrevia: 'Previa centro total',
                Others: 'Outras'
            },
            placentaGrade: {
                none: 'Ninguno',
                I: 'I',
                II: 'II'
            }
        },
        units: {
            gestationalAge: 'semanas',
            hemoglobin: 'g/dL',
            hematocrit: '%',
            platelets: '×10³/μL',
            whiteBloodCells: '×10³/μL'
        },
        validation: {
            required: 'Este campo es obligatorio',
            min: 'El valor mínimo es {min}',
            calculationError: 'Error al calcular el riesgo. Por favor, verifique sus datos.',
            title: 'Errores de Validación',
            calculationErrorTitle: 'Error de Cálculo'
        }
    }
}

export const i18n = createI18n({
    locale: 'pt',
    fallbackLocale: 'en',
    legacy: false,
    globalInjection: true,
    messages
})
