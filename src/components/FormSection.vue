<template>
  <div>
    <v-form @submit.prevent="onSubmit">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.ageRange"
              :label="t('form.ageRange')"
              :items="ageOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.ageRange"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.placentaType"
              :label="t('form.placentaType')"
              :items="placentaOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.placentaType"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.gestationalHypertension"
              :label="t('form.gestationalHypertension')"
              :items="yesNoOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.gestationalHypertension"
              variant="outlined"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.bleedingDuringPregnancy"
              :label="t('form.bleedingDuringPregnancy')"
              :items="yesNoOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.bleedingDuringPregnancy"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.gestationalDiabetes"
              :label="t('form.gestationalDiabetes')"
              :items="yesNoOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.gestationalDiabetes"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.miscarriage"
              :label="t('form.miscarriage')"
              :items="yesNoOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.miscarriage"
              variant="outlined"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.previousDeliveries"
              :label="t('form.previousDeliveries')"
              :items="yesNoOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.previousDeliveries"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.previousCSection"
              :label="t('form.previousCSection')"
              :items="yesNoOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.previousCSection"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.placentaLocation"
              :label="t('form.placentaLocation')"
              :items="placentaLocationOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.placentaLocation"
              variant="outlined"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-select
              v-model="form.placentaGrade"
              :label="t('form.placentaGrade')"
              :items="placentaGradeOptions"
              item-title="label"
              item-value="value"
              :error-messages="errors.placentaGrade"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="form.gestationalAge"
              :label="`${t('form.gestationalAge')} (${t('units.gestationalAge')})`"
              type="number"
              :min="NUMBER_FIELD_CONFIG.gestationalAge.min"
              :max="NUMBER_FIELD_CONFIG.gestationalAge.max"
              :step="NUMBER_FIELD_CONFIG.gestationalAge.step"
              :error-messages="errors.gestationalAge"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="form.hemoglobin"
              :label="`${t('form.hemoglobin')} (${t('units.hemoglobin')})`"
              type="number"
              :min="NUMBER_FIELD_CONFIG.hemoglobin.min"
              :max="NUMBER_FIELD_CONFIG.hemoglobin.max"
              :step="NUMBER_FIELD_CONFIG.hemoglobin.step"
              :error-messages="errors.hemoglobin"
              variant="outlined"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="form.hematocrit"
              :label="`${t('form.hematocrit')} (${t('units.hematocrit')})`"
              type="number"
              :min="NUMBER_FIELD_CONFIG.hematocrit.min"
              :max="NUMBER_FIELD_CONFIG.hematocrit.max"
              :step="NUMBER_FIELD_CONFIG.hematocrit.step"
              :error-messages="errors.hematocrit"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="form.platelets"
              :label="`${t('form.platelets')} (${t('units.platelets')})`"
              type="number"
              :min="NUMBER_FIELD_CONFIG.platelets.min"
              :max="NUMBER_FIELD_CONFIG.platelets.max"
              :step="NUMBER_FIELD_CONFIG.platelets.step"
              :error-messages="errors.platelets"
              variant="outlined"
              required
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model.number="form.whiteBloodCells"
              :label="`${t('form.whiteBloodCells')} (${t('units.whiteBloodCells')})`"
              type="number"
              :min="NUMBER_FIELD_CONFIG.whiteBloodCells.min"
              :max="NUMBER_FIELD_CONFIG.whiteBloodCells.max"
              :step="NUMBER_FIELD_CONFIG.whiteBloodCells.step"
              :error-messages="errors.whiteBloodCells"
              variant="outlined"
              required
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-btn
              type="submit"
              color="secondary"
              size="x-large"
              block
              class="mt-4"
            >
              {{ t('form.calculate') }}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { calculateProbability } from '../utils/calculate'
import { NUMBER_FIELD_CONFIG } from '../utils/formConfig'
import RiskGauge from './RiskGauge.vue'

const emit = defineEmits(['submit'])
const { t } = useI18n()

const form = ref({
  ageRange: '',
  placentaType: '',
  gestationalHypertension: '',
  bleedingDuringPregnancy: '',
  gestationalDiabetes: '',
  miscarriage: '',
  previousDeliveries: '',
  previousCSection: '',
  placentaLocation: '',
  placentaGrade: '',
  gestationalAge: NUMBER_FIELD_CONFIG.gestationalAge.defaultValue,
  hemoglobin: NUMBER_FIELD_CONFIG.hemoglobin.defaultValue,
  hematocrit: NUMBER_FIELD_CONFIG.hematocrit.defaultValue,
  platelets: NUMBER_FIELD_CONFIG.platelets.defaultValue,
  whiteBloodCells: NUMBER_FIELD_CONFIG.whiteBloodCells.defaultValue
})

onMounted(() => {
  form.value.ageRange = ageOptions.value[0].value
  form.value.placentaType = placentaOptions.value[0].value
  form.value.gestationalHypertension = yesNoOptions.value[1].value
  form.value.bleedingDuringPregnancy = yesNoOptions.value[1].value
  form.value.gestationalDiabetes = yesNoOptions.value[1].value
  form.value.miscarriage = yesNoOptions.value[1].value
  form.value.previousDeliveries = yesNoOptions.value[1].value
  form.value.previousCSection = yesNoOptions.value[1].value
  form.value.placentaLocation = placentaLocationOptions.value[0].value
  form.value.placentaGrade = placentaGradeOptions.value[0].value
})

const ageOptions = computed(() => [
  { value: '23_34', label: t('options.age.23_34') },
  { value: '35_44', label: t('options.age.35_44') }
])
const placentaOptions = computed(() => [
  { value: 'Accreta', label: t('options.placentaType.Accreta') },
  { value: 'Increta', label: t('options.placentaType.Increta') },
  { value: 'Percreta', label: t('options.placentaType.Percreta') }
])
const placentaLocationOptions = computed(() => [
  { value: 'TotalCentralPrevia', label: t('options.placentaLocation.TotalCentralPrevia') },
  { value: 'Others', label: t('options.placentaLocation.Others') }
])
const placentaGradeOptions = computed(() => [
  { value: 'none', label: t('options.placentaGrade.none') },
  { value: 'I', label: t('options.placentaGrade.I') },
  { value: 'II', label: t('options.placentaGrade.II') }
])
const yesNoOptions = computed(() => [
  { value: 'yes', label: t('options.yes') },
  { value: 'no', label: t('options.no') }
])

const probability = ref(null)
const errors = ref({})

function validateForm() {
  const newErrors = {}
  
  // Check required select fields
  if (!form.value.ageRange) newErrors.ageRange = t('validation.required')
  if (!form.value.placentaType) newErrors.placentaType = t('validation.required')
  if (!form.value.gestationalHypertension) newErrors.gestationalHypertension = t('validation.required')
  if (!form.value.bleedingDuringPregnancy) newErrors.bleedingDuringPregnancy = t('validation.required')
  if (!form.value.gestationalDiabetes) newErrors.gestationalDiabetes = t('validation.required')
  if (!form.value.miscarriage) newErrors.miscarriage = t('validation.required')
  if (!form.value.previousDeliveries) newErrors.previousDeliveries = t('validation.required')
  if (!form.value.previousCSection) newErrors.previousCSection = t('validation.required')
  if (!form.value.placentaLocation) newErrors.placentaLocation = t('validation.required')
  if (!form.value.placentaGrade) newErrors.placentaGrade = t('validation.required')
  
  // Check required number fields
  if (form.value.gestationalAge === null || form.value.gestationalAge === undefined || form.value.gestationalAge < NUMBER_FIELD_CONFIG.gestationalAge.min) {
    newErrors.gestationalAge = t('validation.min', { min: NUMBER_FIELD_CONFIG.gestationalAge.min })
  }
  if (form.value.hemoglobin === null || form.value.hemoglobin === undefined || form.value.hemoglobin < NUMBER_FIELD_CONFIG.hemoglobin.min) {
    newErrors.hemoglobin = t('validation.min', { min: NUMBER_FIELD_CONFIG.hemoglobin.min })
  }
  if (form.value.hematocrit === null || form.value.hematocrit === undefined || form.value.hematocrit < NUMBER_FIELD_CONFIG.hematocrit.min) {
    newErrors.hematocrit = t('validation.min', { min: NUMBER_FIELD_CONFIG.hematocrit.min })
  }
  if (form.value.platelets === null || form.value.platelets === undefined || form.value.platelets < NUMBER_FIELD_CONFIG.platelets.min) {
    newErrors.platelets = t('validation.min', { min: NUMBER_FIELD_CONFIG.platelets.min })
  }
  if (form.value.whiteBloodCells === null || form.value.whiteBloodCells === undefined || form.value.whiteBloodCells < NUMBER_FIELD_CONFIG.whiteBloodCells.min) {
    newErrors.whiteBloodCells = t('validation.min', { min: NUMBER_FIELD_CONFIG.whiteBloodCells.min })
  }
  
  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

function onSubmit() {
  if (!validateForm()) {
    return
  }

  try {
    probability.value = calculateProbability(form.value)
    emit('submit', probability.value)
  } catch (error) {
    console.error('Calculation error:', error)
  }
}
</script>

<style scoped>
</style>
