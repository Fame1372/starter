export interface RegisterForm {
  mobile: string;
  nationalCode: string;
}

export interface SignupForm {
  password: string;
  confirmPassword: string;
}

export enum SigninStep {
  LOGIN = 1,
  VERIFY_OTP = 2,
  AUTH_PASSWORD = 3,
  FORGET_PASSWORD = 4,
}
