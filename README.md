# Olives Coffee Trail - אוליבס קפה בין הזיתים

חוויית קפה אותנטית בלב הטבע - Authentic coffee experience in nature

## 🫒 About

Olives Coffee Trail is a beautiful, modern coffee shop website built with Next.js and React. The website features a comprehensive menu with Hebrew text and RTL (Right-to-Left) layout, showcasing various coffee drinks, pastries, breakfast items, sandwiches, and desserts.

## ✨ Features

- **Responsive Design**: Beautiful, modern UI that works on all devices
- **RTL Support**: Full Hebrew text support with right-to-left layout
- **Category Filtering**: Filter menu items by category
- **Interactive Cards**: Hover effects and animations on menu items
- **Social Integration**: Direct links to Instagram, Waze, and Google Maps
- **Loading States**: Smooth loading animations
- **Popular Items**: Special badges for popular menu items

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd olives
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
olives/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Main page
├── components/            # React components
│   ├── ui/               # UI components (Button, Card, Badge)
│   └── Menu/             # Menu-specific components
├── data/                 # Data files
│   └── menuItems.js      # Sample menu data
├── lib/                  # Utility functions
│   └── utils.js          # Class name utilities
└── Pages/                # Page components
    └── Menu,js           # Main menu page
```

## 🎨 Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **TypeScript** - Type safety (optional)

## 📱 Menu Categories

- **קפה** (Coffee) - Espresso, Cappuccino, Turkish Coffee, Cold Coffee
- **משקאות קרים** (Cold Drinks) - Natural Lemonade, Fruit Smoothies, Cold Tea
- **מאפים** (Pastries) - Butter Croissants, Cheese Borekas, Chocolate Muffins
- **ארוחות בוקר** (Breakfast) - Israeli Breakfast, Shashuka, Vegetable Omelette
- **כריכים וסלטים** (Sandwiches & Salads) - Avocado Sandwich, Greek Salad, Tuna Sandwich
- **קינוחים** (Desserts) - Tiramisu, Brownies, Cheesecake

## 🎯 Key Components

### MenuHeader
- Displays the coffee shop logo and tagline
- Social media links (Instagram, Waze, Google Maps)
- Beautiful gradient background with coffee imagery

### CategoryFilter
- Sticky navigation with category buttons
- Smooth scrolling and hover effects
- Active state styling

### MenuItemCard
- Displays individual menu items
- Image with hover zoom effect
- Price, description, and category badges
- Popular item indicators

## 🌟 Customization

### Colors
The website uses a custom green and olive color palette defined in `tailwind.config.js`:

```javascript
colors: {
  olive: { /* olive color variants */ },
  green: { /* green color variants */ }
}
```

### Adding Menu Items
Edit `data/menuItems.js` to add, remove, or modify menu items. Each item should follow this structure:

```javascript
{
  id: 1,
  name: "Item Name",
  description: "Item description",
  price: 25,
  category: "קפה",
  image_url: "https://example.com/image.jpg",
  is_popular: false
}
```

## 📄 License

This project is developed by Nadav Cohen for Olives Coffee Trail.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Developer**: Nadav Cohen
- **Coffee Shop**: Olives Coffee Trail
- **Location**: Trail area, Israel

---

Built with ❤️ for coffee lovers everywhere
