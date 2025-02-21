# Simple Blog Enhanced

## Overview

Simple Blog Enhanced is a React-based web application that allows users to view and interact with blog posts. The application includes features such as user authentication, comments, and responsive design.

## Features

- Display a list of blog posts fetched from an API.
- Individual blog post pages with detailed content.
- User authentication (basic login functionality).
- Comments section for each blog post.
- Responsive design for various screen sizes.

## Project Structure

```
simple-blog-enhanced/
├── public/
│   ├── vite.svg
├── src/
│   ├── components/
│   │   ├── CommentForm.jsx
│   │   ├── CommentList.jsx
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── Post.jsx
│   │   ├── PostList.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── PostPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── project_note.md
├── README.md
├── vite.config.js
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/simple-blog-enhanced.git
    cd simple-blog-enhanced
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run lint`: Run ESLint to check for linting errors.
- `npm run preview`: Preview the production build.

## Dependencies

- React
- React DOM
- React Router DOM
- Axios
- Date-fns

## Dev Dependencies

- Vite
- ESLint
- ESLint plugins for React and hooks

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)
- [Date-fns](https://date-fns.org/)
