import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary" />
            <span className="text-xl font-bold text-foreground">РеалтиКарьера</span>
          </Link>
          <Button asChild variant="outline">
            <Link to="/">
              <Icon name="ArrowLeft" size={16} className="mr-2" />
              На главную
            </Link>
          </Button>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Политика конфиденциальности</h1>
        <p className="text-muted-foreground mb-8">Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}</p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Общие положения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, 
                которую РеалтиКарьера (далее — Компания) может получить о пользователе во время использования сайта.
              </p>
              <p>
                Использование сайта означает безоговорочное согласие пользователя с настоящей Политикой и указанными в ней условиями 
                обработки его персональной информации.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Персональная информация пользователей</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>В рамках настоящей Политики под «персональной информацией пользователя» понимаются:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Персональная информация, которую пользователь предоставляет самостоятельно при заполнении форм обратной связи, включая ФИО, номер телефона, адрес электронной почты</li>
                <li>Данные, которые автоматически передаются в процессе использования сайта, включая IP-адрес, информацию из cookies, информация о браузере пользователя</li>
                <li>Иная информация о пользователе, сбор и/или предоставление которой определено в Соглашении об использовании сайта</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Цели обработки персональной информации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>Компания собирает и хранит только ту персональную информацию, которая необходима для:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Связи с пользователем, включая направление уведомлений, запросов и информации, касающихся вакансий и обучения</li>
                <li>Улучшения качества предоставляемых услуг и работы сайта</li>
                <li>Проведения статистических и иных исследований на основе обезличенных данных</li>
                <li>Исполнения соглашений с пользователем</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Условия обработки и передачи персональной информации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Компания обязуется не разглашать полученную от пользователя информацию. Вне пределов, указанных в настоящей Политике, 
                информация о пользователях не будет передана третьим лицам.
              </p>
              <p>Передача персональных данных третьим лицам возможна в следующих случаях:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Пользователь явно выразил свое согласие на такие действия</li>
                <li>Передача необходима в рамках использования пользователем определенного сервиса</li>
                <li>Передача предусмотрена российским или иным применимым законодательством в рамках установленной законодательством процедуры</li>
                <li>В целях обеспечения возможности защиты прав и законных интересов Компании или третьих лиц в случаях, когда пользователь нарушает Пользовательское соглашение</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Меры по защите персональной информации</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Компания принимает необходимые организационные и технические меры для защиты персональной информации пользователя 
                от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, 
                а также от иных неправомерных действий третьих лиц.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Изменение Политики конфиденциальности</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Компания имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в актуальной 
                редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения.
              </p>
              <p>
                Действующая редакция постоянно доступна на данной странице.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Обратная связь</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Все предложения или вопросы по поводу настоящей Политики следует направлять через форму обратной связи на главной странице сайта.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Icon name="Shield" size={24} className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Ваши данные под защитой</h3>
                  <p className="text-sm text-muted-foreground">
                    Мы используем современные технологии шифрования и строго соблюдаем требования 
                    Федерального закона № 152-ФЗ «О персональных данных».
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link to="/">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </div>

      <footer className="border-t bg-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Home" size={24} className="text-primary" />
              <span className="font-bold">РеалтиКарьера</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 РеалтиКарьера</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
