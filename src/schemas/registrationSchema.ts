import { z } from "zod";

export const registrationSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: "ФИО должно содержать минимум 2 символа" }),
    phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
    email: z.string().email({ message: "Введите корректный email" }),
    password: z
      .string()
      .min(6, { message: "Пароль должен содержать минимум 6 символов" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Пароли не совпадают",
    path: ["confirmPassword"],
  });

export type RegistrationFormData = z.infer<typeof registrationSchema>;
