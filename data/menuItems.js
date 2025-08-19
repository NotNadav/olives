export const menuItems = [
  // קפה - Coffee
  {
    id: 1,
    name: "אספרסו",
    description: "אספרסו איטלקי קלאסי עם קרמה עשירה",
    price: 12,
    category: "קפה",
    image_url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
    is_popular: true
  },
  {
    id: 2,
    name: "קפה הפוך",
    description: "קפה הפוך עם חלב מוקצף ועליית חלב",
    price: 18,
    category: "קפה",
    image_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    is_popular: true
  },
  {
    id: 3,
    name: "קפה טורקי",
    description: "קפה טורקי מסורתי עם תבלינים",
    price: 15,
    category: "קפה",
    image_url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    is_popular: false
  },
  {
    id: 4,
    name: "קפה קר",
    description: "קפה קר עם קרח וחלב",
    price: 16,
    category: "קפה",
    image_url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=300&fit=crop",
    is_popular: false
  },

  // משקאות קרים - Cold Drinks
  {
    id: 5,
    name: "לימונדה טבעית",
    description: "לימונדה טבעית עם נענע וקרח",
    price: 14,
    category: "משקאות קרים",
    image_url: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
    is_popular: true
  },
  {
    id: 6,
    name: "שייק פירות",
    description: "שייק פירות מעורב עם בננה ותותים",
    price: 22,
    category: "משקאות קרים",
    image_url: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop",
    is_popular: false
  },
  {
    id: 7,
    name: "תה קר",
    description: "תה ירוק קר עם לימון ודבש",
    price: 12,
    category: "משקאות קרים",
    image_url: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop",
    is_popular: false
  },

  // מאפים - Pastries
  {
    id: 8,
    name: "קרואסון חמאה",
    description: "קרואסון חמאה צרפתי טרי",
    price: 16,
    category: "מאפים",
    image_url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
    is_popular: true
  },
  {
    id: 9,
    name: "בורקס גבינה",
    description: "בורקס גבינה עם פילו טרי",
    price: 14,
    category: "מאפים",
    image_url: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop",
    is_popular: false
  },
  {
    id: 10,
    name: "מאפין שוקולד",
    description: "מאפין שוקולד עם שבבי שוקולד",
    price: 18,
    category: "מאפים",
    image_url: "https://images.unsplash.com/photo-1607958996338-0106c4dcd1c5?w=400&h=300&fit=crop",
    is_popular: false
  },

  // ארוחות בוקר - Breakfast
  {
    id: 11,
    name: "ארוחת בוקר ישראלית",
    description: "ביצים, סלט ירקות, גבינה לבנה ולחם טרי",
    price: 45,
    category: "ארוחות בוקר",
    image_url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
    is_popular: true
  },
  {
    id: 12,
    name: "שייבוץ",
    description: "שייבוץ עם ביצה, גבינה וירקות",
    price: 32,
    category: "ארוחות בוקר",
    image_url: "https://images.unsplash.com/photo-1603046891744-76e6300df9e9?w=400&h=300&fit=crop",
    is_popular: false
  },
  {
    id: 13,
    name: "אומלט ירקות",
    description: "אומלט עם ירקות טריים וגבינה",
    price: 28,
    category: "ארוחות בוקר",
    image_url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    is_popular: false
  },

  // כריכים וסלטים - Sandwiches and Salads
  {
    id: 14,
    name: "כריך אבוקדו",
    description: "כריך אבוקדו עם ביצה וירקות",
    price: 25,
    category: "כריכים וסלטים",
    image_url: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
    is_popular: true
  },
  {
    id: 15,
    name: "סלט יווני",
    description: "סלט יווני עם גבינת פטה וזיתים",
    price: 35,
    category: "כריכים וסלטים",
    image_url: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
    is_popular: false
  },
  {
    id: 16,
    name: "כריך טונה",
    description: "כריך טונה עם ירקות ולחם מלא",
    price: 22,
    category: "כריכים וסלטים",
    image_url: "https://images.unsplash.com/photo-1603046891744-76e6300df9e9?w=400&h=300&fit=crop",
    is_popular: false
  },

  // קינוחים - Desserts
  {
    id: 17,
    name: "טירמיסו",
    description: "טירמיסו איטלקי קלאסי",
    price: 28,
    category: "קינוחים",
    image_url: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    is_popular: true
  },
  {
    id: 18,
    name: "בראוניז",
    description: "בראוניז שוקולד עשיר עם אגוזים",
    price: 18,
    category: "קינוחים",
    image_url: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    is_popular: false
  },
  {
    id: 19,
    name: "עוגת גבינה",
    description: "עוגת גבינה קלאסית עם פירות יער",
    price: 24,
    category: "קינוחים",
    image_url: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
    is_popular: false
  }
];
