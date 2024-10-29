export interface Phone {
  name: string;
  colors: ColorOption[];
  storage: string[];
  paymentPlan: string[];
}

export interface ColorOption {
  name: string;
  hex: string;
}

export interface FormType {
  plan: string;
  manufacturer: string;
  phone: string;
  paymentPlan: string;
  color: string;
  storage: string;
  protectionPlan: string;
  carrier: string;
  imei: string;
  questions: Questions;
}

export interface Questions {
  freeOfDamage: string;
  functionalScreen: string;
  powerOn: string;
}
