# CA Monk Blog Application

A modern blog application built with React, TypeScript, and Tailwind CSS.

## Features

- **Browse Blogs**: View a list of all available blog posts.
- **Read Details**: Select a blog to view its full content and details.
- **Create Post**: Add new blog entries using the "Create Blog" feature.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM (v6)
- **HTTP Client**: Axios

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

1.  **Start the Backend**:
    The application uses a local JSON server as a mock backend.
    ```bash
    npm run server
    ```
    The API will run at `http://localhost:3001`.

2.  **Start the Frontend**:
    Open a new terminal and run:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Project Structure

- `src/api`: API integration and services.
- `src/components`: Reusable UI components.
- `src/layouts`: Page layout components.
- `src/pages`: Main application pages.
- `src/types`: TypeScript definitions.

## License

This project is for educational purposes as part of the CA Monk assignment.
