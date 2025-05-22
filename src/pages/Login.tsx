
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

// Схема валидации для формы входа
const loginFormSchema = z.object({
  identifier: z.string().min(2, { message: "Пожалуйста, введите ваш логин, email или телефон" }),
  password: z.string().min(1, { message: "Пожалуйста, введите пароль" }),
});

// Схема валидации для формы восстановления пароля
const resetPasswordSchema = z.object({
  contact: z.string().min(5, { message: "Введите корректный email или телефон" }),
});

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResetSuccess, setShowResetSuccess] = useState(false);
  const [resetOpen, setResetOpen] = useState(false);

  // Форма входа
  const loginForm = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  // Форма восстановления пароля
  const resetForm = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      contact: "",
    },
  });

  // Обработка отправки формы входа
  const onLoginSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Вход:", values);
    setIsSubmitting(false);
    
    // В реальном приложении здесь будет запрос авторизации
    alert("Выполнен вход в систему");
  };

  // Обработка отправки формы восстановления пароля
  const onResetSubmit = async (values: z.infer<typeof resetPasswordSchema>) => {
    setIsSubmitting(true);
    
    // Имитация отправки данных на сервер
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Восстановление пароля:", values);
    setIsSubmitting(false);
    setShowResetSuccess(true);
    
    // Через 3 секунды закрываем диалог
    setTimeout(() => {
      setShowResetSuccess(false);
      setResetOpen(false);
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container max-w-md mx-auto p-4">
        <Card className="shadow-xl">
          <CardHeader className="form-gradient text-white rounded-t-lg">
            <CardTitle className="text-2xl font-semibold">Вход в систему</CardTitle>
            <CardDescription className="text-gray-100">
              Введите данные для входа в свою учетную запись
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-5">
                <FormField
                  control={loginForm.control}
                  name="identifier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Логин, Email или Телефон</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Icon 
                            name="User" 
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            size={18}
                          />
                          <Input 
                            placeholder="Введите логин, email или телефон" 
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
                  control={loginForm.control}
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
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <Button 
                    type="submit" 
                    className="py-6 form-gradient hover:opacity-95 transition-opacity sm:w-auto w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                        Вход...
                      </div>
                    ) : "Войти"}
                  </Button>
                  
                  <Dialog open={resetOpen} onOpenChange={setResetOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        className="text-purple-600 hover:text-purple-800 hover:bg-purple-50 sm:w-auto w-full"
                      >
                        Забыли пароль?
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Восстановление пароля</DialogTitle>
                        <DialogDescription>
                          Введите email или телефон, указанный при регистрации, чтобы получить инструкции по восстановлению пароля.
                        </DialogDescription>
                      </DialogHeader>
                      
                      {showResetSuccess ? (
                        <div className="py-6">
                          <Alert className="bg-green-50 border-green-200">
                            <AlertDescription className="flex items-center">
                              <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500" />
                              <span>Инструкции по восстановлению пароля отправлены на указанный контакт.</span>
                            </AlertDescription>
                          </Alert>
                        </div>
                      ) : (
                        <Form {...resetForm}>
                          <form onSubmit={resetForm.handleSubmit(onResetSubmit)} className="space-y-4">
                            <FormField
                              control={resetForm.control}
                              name="contact"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email или телефон</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Icon 
                                        name="AtSign" 
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                                        size={18}
                                      />
                                      <Input 
                                        placeholder="example@mail.ru или +7 (XXX) XXX-XX-XX" 
                                        className="pl-10" 
                                        {...field} 
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            
                            <DialogFooter className="mt-4">
                              <Button 
                                type="submit" 
                                className="w-full form-gradient hover:opacity-95 transition-opacity"
                                disabled={isSubmitting}
                              >
                                {isSubmitting ? (
                                  <div className="flex items-center">
                                    <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                                    Отправка...
                                  </div>
                                ) : "Отправить инструкции"}
                              </Button>
                            </DialogFooter>
                          </form>
                        </Form>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </form>
            </Form>
          </CardContent>
          
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-sm text-gray-500">
              Нет аккаунта? <a href="/register" className="text-purple-600 hover:underline">Зарегистрироваться</a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
