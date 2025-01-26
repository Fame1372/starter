import { z } from "zod";
import { validateNationalCode } from "../validate-nationalcode";
import { validateMobile } from "../validate-mobile";

//Signup
export const SignupValidation = z
  .object({
    password: z.string().min(1, "رمزعبور الزامی است"),
    confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
  })
  .superRefine((data, ctx) => {
    if (data.confirmPassword !== data.password) {
      ctx.addIssue({
        path: ["confirmPassword"],
        message: "تکرار رمز عبور اشتباه است",
        code: "custom",
      });
    }
  });

//Signin
export const SigninValidation = z.object({
  nationalCode: z
    .string()
    .min(1, "کد ملی الزامی است")
    .refine((value) => validateNationalCode(value), {
      message: "کد ملی نامعتبر است",
    }),
  mobile: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .refine((value) => validateMobile(value), {
      message: "شماره موبایل نامعتبر است",
    }),
});

export const OtpValidation = z.object({
  otp: z.string().min(1, "کد فعالسازی الزامی است"),
});
// export const RegisterSendOtpSchema = z.object({
//   nationalCode: z
//     .string()
//     .min(1, "کد ملی الزامی است")
//     .refine((value) => validateNationalCode(value), {
//       message: "کد ملی نامعتبر است",
//     }),
//   cellPhone: z
//     .string()
//     .min(1, "شماره موبایل الزامی است")
//     .refine((value) => validateMobile(value), {
//       message: "شماره موبایل نامعتبر است",
//     }),
// });

// //Login

// export const LoginSchemawithCaptcha = z.object({
//   captcha: z.string().min(3, { message: "کد امنیتی الزامی است" }),
//   credential: z
//     .string()
//     .min(1, " شماره موبایل یا کد ملی معتبر الزامی است")
//     .refine((value) => validateNationalCode(value) || validateMobile(value), {
//       message: "لطفا یک شماره موبایل یا کد ملی معتبر وارد کنید",
//     }),
// });

// export const LoginSchema = z.object({
//   credential: z
//     .string()
//     .min(1, " شماره موبایل یا کد ملی معتبر الزامی است")
//     .refine((value) => validateNationalCode(value) || validateMobile(value), {
//       message: "لطفا یک شماره موبایل یا کد ملی معتبر وارد کنید",
//     }),
// });
