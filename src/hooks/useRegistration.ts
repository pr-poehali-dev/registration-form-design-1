import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  type RegistrationFormData,
} from "@/schemas/registrationSchema";

export const useRegistration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSubmit = async (values: RegistrationFormData) => {
    setIsSubmitting(true);

    // Имитация отправки данных на сервер
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);

    // Имитация перенаправления после успешной регистрации
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  return {
    form,
    isSubmitting,
    isSuccess,
    handleSubmit,
  };
};
