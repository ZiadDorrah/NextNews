# NextNews 📰

A modern news application built with **Next.js 14**, demonstrating advanced routing features including **parallel routes**, **intercepting routes**, **route groups**, and **middleware**.

![Next.js](https://img.shields.io/badge/Next.js-14.1.0-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
![License](https://img.shields.io/badge/license-MIT-green)

## 🌟 Features

- **📱 Responsive Design** - Mobile-first design with beautiful UI
- **🎯 Advanced Routing** - Utilizes Next.js App Router with cutting-edge features
- **🖼️ Image Modals** - Click news images to view them in fullscreen modal
- **📅 Archive System** - Browse news by year and month
- **🎨 Modern Styling** - Clean design with custom CSS and Google Fonts
- **⚡ Fast Performance** - Server-side rendering for optimal speed
- **🔍 SEO Optimized** - Metadata configuration for better search rankings

## 🚀 Demo

The application features:

- **News Feed** - Browse latest news articles
- **News Details** - View full articles with images
- **Archive Filtering** - Filter news by year and month
- **Image Gallery** - Fullscreen image viewing with modal overlay

## 🛠️ Tech Stack

- **Framework:** [Next.js 14.1.0](https://nextjs.org/)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** Custom CSS with Google Fonts (Merriweather, Inter)
- **Font Loading:** Next.js Font Optimization

## 📁 Project Structure

```
NextNews/
├── app/                          # Next.js App Router
│   ├── (content)/               # Route group for main content
│   │   ├── archive/             # Archive pages
│   │   │   └── @archive/        # Parallel route slot
│   │   │       └── [[...filter]]/ # Catch-all route for filtering
│   │   ├── news/                # News pages
│   │   │   ├── [slug]/          # Dynamic news detail page
│   │   │   │   ├── @modal/      # Parallel route for modal
│   │   │   │   │   ├── (.)image/ # Intercepting route
│   │   │   │   │   └── default.jsx
│   │   │   │   ├── image/       # Full image page
│   │   │   │   ├── layout.js    # News detail layout
│   │   │   │   └── page.js      # News detail page
│   │   │   └── page.jsx         # News list page
│   │   ├── layout.js            # Main content layout
│   │   └── not-found.js         # 404 page
│   ├── (marketing)/             # Route group for marketing pages
│   │   ├── layout.js            # Marketing layout
│   │   └── page.js              # Home/landing page
│   ├── api/                     # API routes
│   ├── globals.css              # Global styles
│   └── icon.jpg                 # Favicon
├── components/                  # Reusable components
│   ├── header/                  # Header components
│   │   ├── mainHeader.jsx       # Main navigation header
│   │   └── nav-link.jsx         # Navigation link component
│   ├── modal/                   # Modal components
│   └── news-list.jsx            # News list component
├── lib/                         # Utility functions
│   └── news.jsx                 # News data utilities
├── public/                      # Static assets
│   └── images/                  # Image files
├── dummy-news.js                # Sample news data
├── middleware.jsx               # Next.js middleware
└── package.json                 # Dependencies
```

## 🎯 Key Next.js Features Demonstrated

### 1. **Route Groups**

Uses `(content)` and `(marketing)` route groups to organize routes without affecting URL structure.

### 2. **Parallel Routes**

Implements `@modal` and `@archive` slots for rendering multiple pages simultaneously.

### 3. **Intercepting Routes**

Uses `(.)image` convention to intercept navigation and show modals.

### 4. **Catch-all Routes**

Implements `[[...filter]]` for flexible archive filtering by year and month.

### 5. **Middleware**

Custom middleware for request handling and routing control.

### 6. **Dynamic Routes**

Uses `[slug]` for dynamic news article pages.

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd NextNews
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Script          | Description                                |
| --------------- | ------------------------------------------ |
| `npm run dev`   | Starts the development server on port 3000 |
| `npm run build` | Creates an optimized production build      |
| `npm start`     | Starts the production server               |
| `npm run lint`  | Runs ESLint for code quality checks        |

## 🎨 Styling

The application uses custom CSS with:

- **Google Fonts:** Merriweather (serif) for body text, Inter (sans-serif) for UI elements
- **Dark Theme:** Professional dark color scheme (#181817 background)
- **Responsive Grid:** Auto-fill grid layout for news cards
- **Modal Overlay:** Fullscreen image viewing with backdrop

## 📰 News Data Structure

Each news article contains:

```javascript
{
  id: 'n1',
  slug: 'article-slug',
  title: 'Article Title',
  image: 'image-filename.jpg',
  date: 'YYYY-MM-DD',
  content: 'Article content...'
}
```

## 🗂️ Archive System

The archive system allows filtering news by:

- **Year only:** `/archive/2024`
- **Year and Month:** `/archive/2024/3`

Available news utility functions:

- `getAllNews()` - Get all news articles
- `getLatestNews()` - Get the 3 most recent articles
- `getAvailableNewsYears()` - Get list of years with news
- `getAvailableNewsMonths(year)` - Get months with news for a specific year
- `getNewsForYear(year)` - Get all news for a specific year
- `getNewsForYearAndMonth(year, month)` - Get news for specific year and month

## 🔧 Configuration

### Path Aliases

The project uses `@` alias for clean imports:

```javascript
// jsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Middleware

Custom middleware is configured to run on specific routes:

```javascript
export const config = {
  matcher: ["/", "/news/:path*"],
};
```

## 🖼️ Image Modal Feature

Click any news article image to:

1. Open a fullscreen modal overlay
2. View the image in high quality
3. Click the backdrop to close and return to the article

This feature uses:

- **Parallel Routes** for modal rendering
- **Intercepting Routes** to catch image navigation
- **Client-side state** for modal open/close

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 Learning Resources

This project demonstrates concepts from:

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is licensed under the MIT License.

## 🙋 Support

If you have any questions or need help, feel free to open an issue.

---

**Built with ❤️ using Next.js 14**
