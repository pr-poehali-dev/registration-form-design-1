
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="text-center max-w-lg px-4">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white">
            <Icon name="UserPlus" size={40} />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Добро пожаловать!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Для доступа к системе вам необходимо пройти регистрацию
        </p>
        
        <Link to="/register">
          <Button className="form-gradient hover:opacity-90 transition-opacity px-8 py-6 text-lg">
            Перейти к регистрации
            <Icon name="ArrowRight" className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
