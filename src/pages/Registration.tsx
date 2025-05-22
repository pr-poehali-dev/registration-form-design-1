
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Icon from "@/components/ui/icon";

// Схема валидации
const formSchema = z.object({
  fullName: z.string().min(2, { message: "ФИО должно содержать минимум 2 символа" }),
  phone: z.string().min(10, { message: "Введите корректный номер телефона" }),
  email: z.string().email({ message: "Введите корректный email" }),
  password: z.string().min(6, { message: "Пароль должен содержать минимум 6 символов" }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Пароли не совпадают",
  path: ["confirmPassword"]
});

const Registration = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(values);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Имитация перенаправления после успешной регистрации
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-md shadow-lg animate-fade-in">
          <CardHeader className="text-center form-gradient text-white rounded-t-lg">
            <CardTitle className="text-2xl font-semibold">Регистрация успешна!</CardTitle>
            <CardDescription className="text-gray-100">
              Добро пожаловать в нашу систему
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 pb-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Icon name="CheckCircle" size={40} />
              </div>
            </div>
            <p className="text-gray-600">Вы успешно зарегистрировались. Сейчас вы будете перенаправлены на главную страницу.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container form-container max-w-md mx-auto p-4">
        <Card className="shadow-xl">
          <CardHeader className="form-gradient text-white rounded-t-lg">
            <CardTitle className="text-2xl font-semibold">Регистрация</CardTitle>
            <CardDescription className="text-gray-100">
              Создайте учетную запись для доступа к сервису
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ФИО</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Icon 
                            name="User" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            size={18}
                          />
                          <Input 
                            placeholder="Иванов Иван Иванович" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Icon 
                            name="Phone" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            size={18}
                          />
                          <Input 
                            placeholder="+7 (999) 123-45-67" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Электронная почта</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Icon 
                            name="Mail" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            size={18}
                          />
                          <Input 
                            placeholder="example@mail.ru" 
                            type="email" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Пароль</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Icon 
                            name="Lock" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            size={18}
                          />
                          <Input 
                            placeholder="Введите пароль" 
                            type="password" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormDescription className="text-xs text-gray-500">
                        Минимум 6 символов
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Подтвердите пароль</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Icon 
                            name="KeyRound" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            size={18}
                          />
                          <Input 
                            placeholder="Повторите пароль" 
                            type="password" 
                            className="pl-10" 
                            {...field} 
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full py-6 mt-6 form-gradient hover:opacity-95 transition-opacity" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                      Регистрация...
                    </div>
                  ) : "Зарегистрироваться"}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-sm text-gray-500">
              Уже есть аккаунт? <a href="/" className="text-purple-600 hover:underline">Войти</a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
