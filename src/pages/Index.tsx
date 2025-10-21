import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const vacancies = [
    {
      title: "Стажер агента",
      level: "Начальный уровень",
      description: "Старт карьеры в недвижимости с нуля. Полное обучение за счет компании.",
      salary: "от 50 000 ₽",
      requirements: ["Желание развиваться", "Коммуникабельность", "Ответственность"]
    },
    {
      title: "Младший агент",
      level: "Junior",
      description: "Работа с готовой базой клиентов и наставником.",
      salary: "от 80 000 ₽",
      requirements: ["Опыт продаж приветствуется", "Умение работать с CRM", "Водительские права"]
    },
    {
      title: "Агент по недвижимости",
      level: "Middle",
      description: "Самостоятельная работа с клиентами, сопровождение сделок.",
      salary: "от 120 000 ₽",
      requirements: ["Опыт в недвижимости от 1 года", "Собственная клиентская база", "Знание рынка"]
    }
  ];

  const trainingProgram = [
    {
      week: "Неделя 1-2",
      title: "Основы рынка недвижимости",
      topics: ["Типы недвижимости", "Ценообразование", "Юридические аспекты"]
    },
    {
      week: "Неделя 3-4",
      title: "Работа с клиентами",
      topics: ["Техники продаж", "Переговоры", "Психология клиента"]
    },
    {
      week: "Неделя 5-6",
      title: "Практика и сопровождение",
      topics: ["Показы объектов", "Оформление сделок", "Работа с документами"]
    }
  ];

  const careerPath = [
    { level: "Стажер", period: "0-3 мес", salary: "50K+" },
    { level: "Младший агент", period: "3-9 мес", salary: "80K+" },
    { level: "Агент", period: "9-18 мес", salary: "120K+" },
    { level: "Старший агент", period: "18+ мес", salary: "200K+" }
  ];

  const benefits = [
    {
      icon: "GraduationCap",
      title: "Бесплатное обучение",
      description: "Полная программа подготовки с опытными наставниками"
    },
    {
      icon: "TrendingUp",
      title: "Быстрый рост",
      description: "Карьерный рост от стажера до топ-агента за 1.5 года"
    },
    {
      icon: "Wallet",
      title: "Высокий доход",
      description: "Процент с каждой сделки без ограничений по доходу"
    },
    {
      icon: "Users",
      title: "Команда профи",
      description: "Работа в коллективе лучших агентов города"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Соколов",
      position: "Старший агент",
      period: "В компании 2 года",
      text: "Пришел в компанию стажером без опыта в продажах. Уже через 4 месяца закрыл первую крупную сделку и понял, что это мое. Сейчас зарабатываю в 5 раз больше, чем на прошлой работе.",
      rating: 5
    },
    {
      name: "Мария Петрова",
      position: "Агент по недвижимости",
      period: "В компании 1.5 года",
      text: "После декрета боялась возвращаться на работу. Здесь меня обучили всему с нуля, дали гибкий график. За год вышла на стабильный доход 150К в месяц и построила свою базу клиентов.",
      rating: 5
    },
    {
      name: "Дмитрий Волков",
      position: "Младший агент",
      period: "В компании 8 месяцев",
      text: "Менял сферу деятельности, искал что-то с перспективами роста. Программа обучения очень структурированная, наставник всегда на связи. Уже провожу показы самостоятельно и закрываю сделки.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Нужен ли опыт в недвижимости?",
      answer: "Нет, опыт не требуется. Мы обучаем с нуля — от основ рынка недвижимости до закрытия сделок. Главное — желание развиваться и учиться."
    },
    {
      question: "Сколько длится обучение?",
      answer: "Базовый курс — 6 недель. Первые 2 недели — теория, затем практика с наставником. После обучения вы сможете самостоятельно работать с клиентами и закрывать сделки."
    },
    {
      question: "Какой график работы?",
      answer: "График гибкий. Вы сами планируете встречи с клиентами и показы. Обязательны еженедельные планерки и отчеты. Для стажеров предусмотрены обучающие сессии по расписанию."
    },
    {
      question: "Как формируется доход?",
      answer: "Фиксированная ставка + процент от каждой сделки. Стажер получает от 50К, младший агент — от 80К, опытный агент — от 120К. Потолка по доходу нет — все зависит от ваших результатов."
    },
    {
      question: "Предоставляете ли вы клиентскую базу?",
      answer: "Да. Стажерам и младшим агентам мы предоставляем готовую базу клиентов для работы. По мере роста вы будете формировать собственную базу и получать больший процент."
    },
    {
      question: "Что нужно для старта?",
      answer: "Желание развиваться, коммуникабельность и смартфон. Всем необходимым для работы — CRM-система, обучающие материалы, поддержка наставника — мы обеспечим."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary" />
            <span className="text-xl font-bold text-foreground">РеалтиКарьера</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#vacancies" className="text-sm font-medium hover:text-primary transition-colors">Вакансии</a>
            <a href="#training" className="text-sm font-medium hover:text-primary transition-colors">Обучение</a>
            <a href="#career" className="text-sm font-medium hover:text-primary transition-colors">Карьера</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#contacts">Откликнуться</a>
          </Button>
        </nav>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Начни карьеру в <span className="text-primary">недвижимости</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Обучим профессии агента по недвижимости с нуля. Первый доход уже через месяц обучения.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2" asChild>
              <a href="#vacancies">
                <Icon name="Briefcase" size={20} />
                Смотреть вакансии
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#training">
                <Icon name="BookOpen" size={20} />
                Программа обучения
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all hover-scale">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="vacancies" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Открытые вакансии</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите позицию, которая соответствует вашему опыту и амбициям
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {vacancies.map((vacancy, index) => (
            <Card key={index} className="hover:shadow-xl transition-all hover-scale">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-secondary/10 text-secondary">
                    {vacancy.level}
                  </span>
                  <span className="text-sm font-bold text-primary">{vacancy.salary}</span>
                </div>
                <CardTitle>{vacancy.title}</CardTitle>
                <CardDescription>{vacancy.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2">Требования:</p>
                  <ul className="space-y-1">
                    {vacancy.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" asChild>
                  <a href="#contacts">Откликнуться</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="training" className="bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Программа обучения</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              6 недель интенсивного обучения от теории до практических сделок
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {trainingProgram.map((program, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold mb-3">
                    {index + 1}
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{program.week}</span>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <Icon name="Circle" size={8} className="text-primary mt-1.5 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Карьерный путь</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Прозрачная система роста от стажера до топ-агента
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary hidden md:block" />
            <div className="space-y-8">
              {careerPath.map((step, index) => (
                <div key={index} className="relative flex items-start gap-6 md:gap-8">
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-lg shrink-0 relative z-10">
                    {index + 1}
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <CardTitle className="text-xl">{step.level}</CardTitle>
                        <div className="flex gap-4 text-sm">
                          <span className="text-muted-foreground flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            {step.period}
                          </span>
                          <span className="font-semibold text-primary">{step.salary}</span>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Истории успеха</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Реальные отзывы наших агентов, которые начинали с нуля
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <CardTitle className="text-lg mb-1">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.period}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ответы на вопросы, которые чаще всего задают кандидаты
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Начните карьеру сегодня</h2>
              <p className="text-white/90">
                Заполните форму, и мы свяжемся с вами в течение дня
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Имя</label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о себе и своем опыте..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={24} className="text-primary" />
              <span className="font-bold">РеалтиКарьера</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#vacancies" className="hover:text-foreground transition-colors">Вакансии</a>
              <a href="#training" className="hover:text-foreground transition-colors">Обучение</a>
              <a href="#career" className="hover:text-foreground transition-colors">Карьера</a>
              <a href="#contacts" className="hover:text-foreground transition-colors">Контакты</a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 РеалтиКарьера</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;