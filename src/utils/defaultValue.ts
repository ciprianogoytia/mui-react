import { FormType } from "../types/devices";

export const defaultValue: FormType = {
  plan: 'basic',
  manufacturer: 'Apple',
  phone: 'iPhone 14',
  paymentPlan: 'installments',
  color: '#000000',
  storage: '128GB',
  protectionPlan: 'addProtectionPlan',
  carrier: 'Google Voice',
  imei: '',
  questions: {
    freeOfDamage: 'yes',
    functionalScreen: 'yes',
    powerOn: 'yes'
  },
}