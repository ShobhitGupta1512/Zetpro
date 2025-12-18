# 🛍️ Zaptro - Modern E-commerce Website

A full-featured e-commerce website built with React, Vite, and Tailwind CSS. Features a complete shopping experience with product catalog, shopping cart, user authentication, and email integration.

![Zaptro Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Zaptro+E-commerce)

## ✨ Features

### 🛒 Core E-commerce Features
- **Product Catalog** - Browse products by categories (Electronics, Jewelry, Men's/Women's Clothing)
- **Advanced Filtering** - Filter by category, brand, price range, and search
- **Shopping Cart** - Add, remove, update quantities with persistent storage
- **Toast Notifications** - Real-time feedback for all cart actions
- **Responsive Design** - Mobile-first design that works on all devices

### 🎨 User Experience
- **Modern UI** - Beautiful gradients, animations, and smooth transitions
- **Category Navigation** - Quick access to product categories from homepage
- **Product Details** - Detailed product pages with images and descriptions
- **Loading States** - Elegant loading animations and states

### 📧 Communication Features
- **Contact Form** - EmailJS integration for customer inquiries
- **Newsletter Signup** - Subscribe to updates with email confirmation
- **About Page** - Showcase all product categories with featured items

### 🔧 Technical Features
- **React 19** - Latest React with modern hooks and features
- **Vite** - Lightning-fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Context API** - Global state management for cart and products
- **React Router** - Client-side routing with URL-based filtering

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd zetpro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
zetpro/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and media files
│   ├── components/        # Reusable UI components
│   │   ├── Carousel.jsx   # Homepage product carousel
│   │   ├── Category.jsx   # Category navigation buttons
│   │   ├── FilterSection.jsx # Product filtering UI
│   │   ├── Navbar.jsx     # Navigation header
│   │   ├── ProductCart.jsx # Individual product cards
│   │   ├── Toast.jsx      # Notification system
│   │   └── ...
│   ├── Context/           # React Context for state management
│   │   └── DataContext.jsx # Global state (products, cart)
│   ├── config/            # Configuration files
│   │   └── emailjs.js     # Email service configuration
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Homepage
│   │   ├── Products.jsx   # Product catalog
│   │   ├── Cart.jsx       # Shopping cart
│   │   ├── About.jsx      # About page with categories
│   │   └── Contact.jsx    # Contact form
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── .gitignore            # Git ignore rules
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## 🔧 Configuration

### Email Setup (Optional)
To enable contact forms and newsletter signup:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up email services and templates
3. Update `src/config/emailjs.js` with your credentials
4. Follow the detailed guide in `EMAIL_SETUP.md`

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Zaptro
VITE_API_BASE_URL=https://fakestoreapi.com
```

## 🎯 Key Components

### Shopping Cart System
- **Add to Cart**: Click "Add to Cart" on any product
- **Quantity Management**: Use +/- buttons in cart
- **Remove Items**: Remove products individually
- **Persistent Storage**: Cart persists across browser sessions
- **Toast Notifications**: Immediate feedback for all actions

### Product Filtering
- **Category Filter**: Filter by product categories
- **Brand Filter**: Filter by available brands
- **Price Range**: Set minimum and maximum prices
- **Search**: Real-time search by product name
- **URL Parameters**: Shareable filtered views

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Adaptive layouts for tablets
- **Desktop Experience**: Full-featured desktop interface
- **Touch-Friendly**: Large touch targets for mobile

## 🛠️ Technologies Used

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: React Icons, Lucide React
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Email Service**: EmailJS
- **State Management**: React Context API
- **Development**: ESLint, Hot Module Replacement

## 📊 API Integration

The app integrates with the [Fake Store API](https://fakestoreapi.com/) for product data:

- **Products Endpoint**: `/products` - Get all products
- **Categories**: Automatically extracted from product data
- **Brands**: Simulated brand data for filtering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help:

- 📧 **Email**: [your-email@example.com]
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/zetpro/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/zetpro/discussions)

## 🎉 Acknowledgments

- [Fake Store API](https://fakestoreapi.com/) for product data
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Icons](https://react-icons.github.io/react-icons/) for icons
- [EmailJS](https://www.emailjs.com/) for email functionality

---

**Made with ❤️ using React & Vite**
