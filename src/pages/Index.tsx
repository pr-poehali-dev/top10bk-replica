import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface RatingItem {
  id: number;
  rank: number;
  title: string;
  category: string;
  rating: number;
  bonus: string;
  features: string[];
  pros: string[];
  cons: string[];
}

const Index = () => {
  const [selectedForComparison, setSelectedForComparison] = useState<number[]>([]);
  const [activeSection, setActiveSection] = useState<string>('ratings');

  const ratings: RatingItem[] = [
    {
      id: 1,
      rank: 1,
      title: 'TopBet',
      category: 'Букмекерская контора',
      rating: 9.8,
      bonus: 'До 30 000 ₽',
      features: ['Быстрый вывод средств', 'Мобильное приложение', 'Лайв-ставки'],
      pros: ['Высокие коэффициенты', 'Большой выбор событий', 'Надёжность'],
      cons: ['Требуется верификация']
    },
    {
      id: 2,
      rank: 2,
      title: 'BetWinner',
      category: 'Букмекерская контора',
      rating: 9.5,
      bonus: 'До 25 000 ₽',
      features: ['Криптовалюты', 'Казино', 'Киберспорт'],
      pros: ['Множество способов оплаты', 'Бонусная программа', '24/7 поддержка'],
      cons: ['Сложный интерфейс для новичков']
    },
    {
      id: 3,
      rank: 3,
      title: 'MelBet',
      category: 'Букмекерская контора',
      rating: 9.3,
      bonus: 'До 20 000 ₽',
      features: ['ТВ-игры', 'Виртуальный спорт', 'Статистика'],
      pros: ['Подробная статистика', 'Широкая линия', 'Акции для постоянных клиентов'],
      cons: ['Долгая верификация']
    },
    {
      id: 4,
      rank: 4,
      title: 'Liga Stavok',
      category: 'Букмекерская контора',
      rating: 9.0,
      bonus: 'До 15 000 ₽',
      features: ['ЦУПИС', 'Официальная лицензия РФ', 'Пункты приёма ставок'],
      pros: ['Официальная работа в РФ', 'Быстрая поддержка', 'Безопасность'],
      cons: ['Ниже коэффициенты']
    },
    {
      id: 5,
      rank: 5,
      title: 'Fonbet',
      category: 'Букмекерская контора',
      rating: 8.8,
      bonus: 'До 15 000 ₽',
      features: ['Экспресс дня', 'Онлайн-трансляции', 'Фрибеты'],
      pros: ['Удобное приложение', 'Низкая минималка', 'Программа лояльности'],
      cons: ['Ограничения по регионам']
    },
    {
      id: 6,
      rank: 6,
      title: '1xStavka',
      category: 'Букмекерская контора',
      rating: 8.5,
      bonus: 'До 10 000 ₽',
      features: ['Киберспорт', 'Бонусные баллы', 'Cashout'],
      pros: ['Быстрая регистрация', 'Много способов депозита', 'Акции'],
      cons: ['Много рекламы']
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Топ-5 букмекеров с лучшими бонусами в ноябре 2025',
      date: '15 ноября 2025',
      category: 'Бонусы'
    },
    {
      id: 2,
      title: 'Новые правила регулирования ставок в России',
      date: '12 ноября 2025',
      category: 'Законодательство'
    },
    {
      id: 3,
      title: 'Обзор мобильных приложений букмекеров 2025',
      date: '10 ноября 2025',
      category: 'Обзоры'
    }
  ];

  const articles = [
    {
      id: 1,
      title: 'Как правильно выбрать букмекера: полное руководство',
      description: 'Подробная инструкция для новичков по выбору надёжной букмекерской конторы',
      readTime: '8 мин'
    },
    {
      id: 2,
      title: 'Стратегии ставок на спорт: от базовых до продвинутых',
      description: 'Разбираем эффективные стратегии для успешных ставок',
      readTime: '12 мин'
    },
    {
      id: 3,
      title: 'Безопасность в онлайн-ставках: на что обратить внимание',
      description: 'Ключевые аспекты безопасности при работе с букмекерами',
      readTime: '6 мин'
    }
  ];

  const toggleComparison = (id: number) => {
    setSelectedForComparison(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : prev.length < 3 
          ? [...prev, id]
          : prev
    );
  };

  const getComparisonItems = () => {
    return ratings.filter(item => selectedForComparison.includes(item.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-secondary">Top10BK</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button 
                onClick={() => setActiveSection('ratings')}
                className={`text-sm font-medium transition-colors ${activeSection === 'ratings' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Рейтинги
              </button>
              <button 
                onClick={() => setActiveSection('reviews')}
                className={`text-sm font-medium transition-colors ${activeSection === 'reviews' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Обзоры
              </button>
              <button 
                onClick={() => setActiveSection('news')}
                className={`text-sm font-medium transition-colors ${activeSection === 'news' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Новости
              </button>
              <button 
                onClick={() => setActiveSection('articles')}
                className={`text-sm font-medium transition-colors ${activeSection === 'articles' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Статьи
              </button>
              <button 
                onClick={() => setActiveSection('contacts')}
                className={`text-sm font-medium transition-colors ${activeSection === 'contacts' ? 'text-primary' : 'text-gray-600 hover:text-primary'}`}
              >
                Контакты
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'ratings' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                Рейтинг букмекерских контор 2025
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Независимый рейтинг лучших букмекеров России. Честные обзоры и экспертные оценки.
              </p>
            </div>

            {selectedForComparison.length > 0 && (
              <Card className="mb-8 p-6 bg-primary/5 border-primary/20 animate-scale-in">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon name="GitCompare" className="text-primary" size={24} />
                    <div>
                      <h3 className="font-semibold text-secondary">Сравнение выбранных позиций</h3>
                      <p className="text-sm text-muted-foreground">
                        Выбрано: {selectedForComparison.length} из 3
                      </p>
                    </div>
                  </div>
                  <Button 
                    onClick={() => {
                      const items = getComparisonItems();
                      alert(`Сравнение:\n${items.map(i => `${i.title} - рейтинг ${i.rating}`).join('\n')}`);
                    }}
                    disabled={selectedForComparison.length < 2}
                  >
                    Сравнить
                  </Button>
                </div>
              </Card>
            )}

            <div className="grid gap-6">
              {ratings.map((item, index) => (
                <Card 
                  key={item.id}
                  className="p-6 hover:shadow-xl transition-all duration-300 animate-fade-in border-l-4 border-l-primary/20 hover:border-l-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-4">
                      <Checkbox 
                        checked={selectedForComparison.includes(item.id)}
                        onCheckedChange={() => toggleComparison(item.id)}
                        disabled={!selectedForComparison.includes(item.id) && selectedForComparison.length >= 3}
                      />
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {item.rank}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-secondary mb-1">{item.title}</h3>
                          <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                            <span className="text-2xl font-bold text-secondary">{item.rating}</span>
                          </div>
                          <Badge className="bg-accent text-white">{item.bonus}</Badge>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-secondary mb-2 flex items-center gap-1">
                            <Icon name="Zap" size={16} className="text-primary" />
                            Особенности
                          </h4>
                          <ul className="space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-1">
                                <Icon name="Check" size={14} className="text-primary mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-secondary mb-2 flex items-center gap-1">
                            <Icon name="ThumbsUp" size={16} className="text-green-600" />
                            Преимущества
                          </h4>
                          <ul className="space-y-1">
                            {item.pros.map((pro, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-1">
                                <Icon name="Plus" size={14} className="text-green-600 mt-0.5" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-secondary mb-2 flex items-center gap-1">
                            <Icon name="ThumbsDown" size={16} className="text-red-600" />
                            Недостатки
                          </h4>
                          <ul className="space-y-1">
                            {item.cons.map((con, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-1">
                                <Icon name="Minus" size={14} className="text-red-600 mt-0.5" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1">
                          Перейти на сайт
                          <Icon name="ExternalLink" size={16} className="ml-2" />
                        </Button>
                        <Button variant="outline">
                          Подробный обзор
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'reviews' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-8">Обзоры букмекеров</h2>
            <Tabs defaultValue="detailed" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="detailed">Детальные обзоры</TabsTrigger>
                <TabsTrigger value="express">Экспресс-обзоры</TabsTrigger>
                <TabsTrigger value="video">Видео-обзоры</TabsTrigger>
              </TabsList>
              <TabsContent value="detailed">
                <div className="grid md:grid-cols-2 gap-6">
                  {ratings.slice(0, 4).map(item => (
                    <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        Подробный обзор букмекерской конторы {item.title}: бонусы, коэффициенты, линия событий и мобильное приложение.
                      </p>
                      <Button variant="outline" className="w-full">Читать обзор</Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="express">
                <p className="text-center text-muted-foreground py-12">Экспресс-обзоры в разработке</p>
              </TabsContent>
              <TabsContent value="video">
                <p className="text-center text-muted-foreground py-12">Видео-обзоры в разработке</p>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-8">Новости</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {news.map(item => (
                <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                  <Badge className="mb-3">{item.category}</Badge>
                  <h3 className="text-lg font-semibold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                  <Button variant="link" className="p-0">Читать далее →</Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'articles' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-secondary mb-8">Статьи и гайды</h2>
            <div className="grid gap-6">
              {articles.map(item => (
                <Card key={item.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{item.readTime}</Badge>
                        <Button variant="link" className="p-0">Читать статью →</Button>
                      </div>
                    </div>
                    <Icon name="BookOpen" className="text-primary ml-4" size={32} />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="animate-fade-in max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-secondary mb-8 text-center">Контакты</h2>
            <Card className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Email</h3>
                    <p className="text-muted-foreground">info@top10bk.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MessageCircle" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Telegram</h3>
                    <p className="text-muted-foreground">@top10bk_support</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Время работы</h3>
                    <p className="text-muted-foreground">Ежедневно, 9:00 - 21:00 МСК</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Адрес</h3>
                    <p className="text-muted-foreground">Россия, Москва</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-white mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">© 2025 Top10BK. Все права защищены.</p>
          <p className="text-xs opacity-60 mt-2">Информационный портал о букмекерских конторах</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
