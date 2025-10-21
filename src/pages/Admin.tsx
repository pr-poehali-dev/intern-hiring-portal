import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Application {
  id: number;
  name: string;
  phone: string;
  email: string;
  message: string;
  created_at: string;
  status: string;
}

const Admin = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://functions.poehali.dev/401a8bbe-04a3-400b-921d-29dbf2b9d486');
      const data = await response.json();
      
      if (data.success) {
        setApplications(data.applications);
      } else {
        setError('Не удалось загрузить заявки');
      }
    } catch (err) {
      setError('Произошла ошибка при загрузке заявок');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { label: string; variant: "default" | "secondary" | "destructive" | "outline" }> = {
      new: { label: 'Новая', variant: 'default' },
      contacted: { label: 'Связались', variant: 'secondary' },
      hired: { label: 'Принят', variant: 'outline' },
      rejected: { label: 'Отказ', variant: 'destructive' }
    };
    
    const statusInfo = statusMap[status] || { label: status, variant: 'outline' as const };
    return <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO 
        title="Админ-панель — РеалтиКарьера"
        description="Управление заявками кандидатов"
      />
      
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

      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Админ-панель</h1>
            <p className="text-muted-foreground">Управление заявками кандидатов</p>
          </div>
          <Button onClick={fetchApplications} variant="outline">
            <Icon name="RefreshCw" size={16} className="mr-2" />
            Обновить
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Icon name="Loader2" size={48} className="animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Загрузка заявок...</p>
            </div>
          </div>
        ) : error ? (
          <Card className="border-destructive">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Icon name="AlertCircle" size={24} className="text-destructive" />
                <div>
                  <p className="font-semibold">Ошибка</p>
                  <p className="text-sm text-muted-foreground">{error}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : applications.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Icon name="Inbox" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">Заявок пока нет</p>
                <p className="text-muted-foreground">Новые заявки будут отображаться здесь</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center gap-4 mb-6">
              <Card className="flex-1">
                <CardHeader className="pb-3">
                  <CardDescription>Всего заявок</CardDescription>
                  <CardTitle className="text-3xl">{applications.length}</CardTitle>
                </CardHeader>
              </Card>
              <Card className="flex-1">
                <CardHeader className="pb-3">
                  <CardDescription>Новых</CardDescription>
                  <CardTitle className="text-3xl">
                    {applications.filter(a => a.status === 'new').length}
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>

            {applications.map((app) => (
              <Card key={app.id} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{app.name}</CardTitle>
                        {getStatusBadge(app.status)}
                      </div>
                      <CardDescription>
                        <Icon name="Calendar" size={14} className="inline mr-1" />
                        {formatDate(app.created_at)}
                      </CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ID: {app.id}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <a href={`tel:${app.phone}`} className="hover:underline">
                        {app.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <a href={`mailto:${app.email}`} className="hover:underline">
                        {app.email}
                      </a>
                    </div>
                  </div>
                  {app.message && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-semibold mb-1">Сообщение:</p>
                      <p className="text-sm text-muted-foreground">{app.message}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
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

export default Admin;
