import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const RegistrationSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md shadow-lg animate-fade-in">
        <CardHeader className="text-center form-gradient text-white rounded-t-lg">
          <CardTitle className="text-2xl font-semibold">
            Регистрация успешна!
          </CardTitle>
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
          <p className="text-gray-600">
            Вы успешно зарегистрировались. Сейчас вы будете перенаправлены на
            главную страницу.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegistrationSuccess;
