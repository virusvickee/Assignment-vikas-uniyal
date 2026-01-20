
# Project Title

A brief description of what this project does and who it's for

# Vikas Blog Application

A modern, responsive blog application built with React, TypeScript, and Tailwind CSS. This application allows users to browse, read, and create blog posts with a clean and intuitive interface.

## 🚀 Features

### Core Functionality
- **Browse Blogs**: View a comprehensive list of all available blog posts with cover images and descriptions
- **Read Blog Details**: Click on any blog to view its full content with formatted text and metadata
- **Create New Posts**: Add new blog entries using the intuitive "Create Blog" dialog
- **Category System**: Organize blogs with multiple categories (FINANCE, TECH, CAREER, EDUCATION, REGULATIONS, LIFESTYLE)
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile viewing experiences

### User Interface
- **Modern Design**: Clean, professional interface using shadcn/ui components
- **Blog Metadata Display**: Shows category tags, estimated read time, and publication date
- **Image Support**: Cover images for each blog post with hover effects
- **Loading States**: Smooth loading indicators for better user experience
- **Form Validation**: Comprehensive validation for blog creation

### Technical Features
- **Real-time Updates**: Automatic refresh of blog list when new posts are created
- **Error Handling**: Robust error handling for API calls and user interactions
- **Type Safety**: Full TypeScript implementation for better code reliability
- **Performance Optimized**: Efficient state management and query caching

## 🛠️ Tech Stack

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety and better developer experience
- **Vite**: Fast build tool and development server

### Styling & UI
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **shadcn/ui**: High-quality, accessible UI components
- **Responsive Design**: Mobile-first approach with breakpoint optimization

### State Management & Data Fetching
- **TanStack Query (React Query)**: Powerful data synchronization and caching
- **Axios**: HTTP client for API requests
- **Optimistic Updates**: Immediate UI updates with background synchronization

### Routing & Navigation
- **React Router DOM v6**: Modern client-side routing
- **Nested Routes**: Organized route structure for better code organization

### Development Tools
- **ESLint**: Code linting and quality enforcement
- **PostCSS**: CSS processing and optimization
- **JSON Server**: Mock backend for development and testing

## 📁 Project Structure

```
src/
├── api/                    # API integration and services
│   └── blogs.ts           # Blog-related API calls
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui base components
│   ├── BlogDetail.tsx    # Individual blog post display
│   ├── BlogList.tsx      # Blog listing component
│   └── CreateBlogDialog.tsx # Blog creation form
├── layouts/              # Page layout components
│   └── MainLayout.tsx    # Main application shell
├── pages/                # Main application pages
│   └── HomePage.tsx      # Home page with blog list
├── types/                # TypeScript type definitions
│   └── index.ts          # Blog and API types
├── utils/                # Utility functions
│   └── readTime.ts       # Reading time calculation
├── lib/                  # Library configurations
└── App.tsx               # Main application component
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Package manager (comes with Node.js)

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd vikas-blog-application
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode

1. **Start the Backend Server**:
   ```bash
   npm run server
   ```
   - The JSON server will run at `http://localhost:3001`
   - Provides REST API endpoints for blog data
   - Includes sample blog posts for testing

2. **Start the Frontend Development Server**:
   ```bash
   npm run dev
   ```
   - The application will be available at `http://localhost:5173`
   - Hot reload enabled for development
   - Automatic browser refresh on code changes

#### Production Build

```bash
npm run build
npm run preview
```

## 📊 API Endpoints

The application uses a JSON server that provides the following endpoints:

- `GET /blogs` - Retrieve all blog posts
- `GET /blogs/:id` - Retrieve a specific blog post
- `POST /blogs` - Create a new blog post
- `PUT /blogs/:id` - Update an existing blog post
- `DELETE /blogs/:id` - Delete a blog post

## 🎨 UI Components

### Blog List
- Grid layout with responsive columns
- Cover images with hover effects
- Category tags and metadata display
- Click-to-read functionality

### Blog Detail View
- Full-width cover image
- Formatted metadata section (category, read time, date)
- Rich text content display
- Responsive typography

### Create Blog Dialog
- Modal form with validation
- Category selection with checkboxes
- Image URL input for cover images
- Rich text area for content
- Real-time form validation

## 🔧 Configuration Files

- **`vite.config.ts`**: Vite build configuration
- **`tailwind.config.cjs`**: Tailwind CSS customization
- **`tsconfig.json`**: TypeScript compiler options
- **`eslint.config.js`**: ESLint rules and configuration
- **`package.json`**: Dependencies and scripts

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px and above

## 🚀 Performance Features

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Lazy loading and responsive images
- **Caching**: Intelligent query caching with TanStack Query
- **Bundle Optimization**: Tree shaking and minification

## 🔒 Type Safety

Full TypeScript implementation with:
- Strict type checking enabled
- Interface definitions for all data structures
- Type-safe API calls and responses
- Component prop validation

## 🎯 Future Enhancements

- User authentication and authorization
- Blog post editing functionality
- Comment system
- Search and filtering capabilities
- Tag-based navigation
- Social sharing features
- SEO optimization
- Dark mode support

## 📄 License

This project is developed for educational purposes and portfolio demonstration.

## 👨‍💻 Developer

**Vikas Uniyal**
- Portfolio project showcasing modern React development practices
- Demonstrates proficiency in TypeScript, React, and modern web technologies

---

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
#
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Badges

Add badges from somewhere like: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

