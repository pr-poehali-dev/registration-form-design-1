import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const navigate = useNavigate();

  const packages = [
    {
      name: "Начальный",
      price: "12 000 ₽",
      originalPrice: "15 000 ₽",
      features: [
        "Основы интерфейса",
        "Базовые принципы",
        "5 практических заданий",
        "Сертификат",
      ],
      popular: false,
    },
    {
      name: "Продвинутый",
      price: "19 000 ₽",
      features: [
        "Весь контент начального",
        "Продвинутые техники",
        "15 практических проектов",
        "Менторство",
        "Портфолио",
      ],
      popular: true,
    },
    {
      name: "Профессиональный",
      price: "29 000 ₽",
      features: [
        "Весь контент продвинутого",
        "Индивидуальные консультации",
        "Помощь в трудоустройстве",
        "Доступ к закрытому сообществу",
      ],
      popular: false,
    },
  ];

  const instructors = [
    {
      name: "Анна Петрова",
      role: "Lead UX Designer",
      experience: "8 лет в дизайне",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Михаил Козлов",
      role: "Senior UI Designer",
      experience: "6 лет в интерфейсах",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate(-1)} className="mb-4">
            ← Назад к курсам
          </Button>

          <div className="flex gap-4 mb-6">
            <Badge variant="secondary">UI/UX</Badge>
            <Badge variant="outline">Начальный</Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Основы UI/UX дизайна
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Изучите основы пользовательского интерфейса и создайте свой первый
            проект. Освойте принципы UX-исследований и современные инструменты
            дизайна.
          </p>
        </div>

        {/* Course Program */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Программа курса</CardTitle>
            <CardDescription>
              8 недель • 32 урока • 1024 студента
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Основы дизайна</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Принципы композиции</li>
                  <li>• Типографика и цвет</li>
                  <li>• Создание wireframes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">UX исследования</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Интервью с пользователями</li>
                  <li>• Создание персон</li>
                  <li>• Тестирование прототипов</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructors */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Наши преподаватели</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {instructors.map((instructor, index) => (
              <Card key={index}>
                <CardContent className="flex items-center gap-4 p-6">
                  <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{instructor.name}</h4>
                    <p className="text-purple-600 text-sm">{instructor.role}</p>
                    <p className="text-gray-500 text-sm">
                      {instructor.experience}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Выберите тарифный план</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "border-purple-500 shadow-lg" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle>{pkg.name}</CardTitle>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-purple-600">
                      {pkg.price}
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {pkg.originalPrice}
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}
                    variant={pkg.popular ? "default" : "outline"}
                  >
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
