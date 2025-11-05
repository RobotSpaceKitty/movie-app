````markdown
# 🎬 React Movie App

A responsive single-page React application that lets users search, browse, and discover trending movies using **The Movie Database (TMDB) API**, with search analytics stored in **Appwrite Cloud Database**. Built with **Vite**, **Tailwind CSS**, and modern React hooks.

---

## 🚀 Features

- 🔍 **Live Search with Debounce**
  - Prevents excessive API calls using `react-use`’s `useDebounce`.
- 🎥 **Dynamic Movie Fetching**
  - Fetches popular movies by default, or query-based results from TMDB.
- 📊 **Trending Section**
  - Displays top-searched movies based on Appwrite database counts.
- 💾 **Appwrite Integration**
  - Logs search terms and counts how often each title is searched.
- 🌀 **Loading Spinner**
  - Accessible SVG-based spinner for API loading states.
- ⚡ **Optimized Performance**
  - Built with **Vite** and **React 18**, ensuring fast HMR and production builds.
- 🎨 **Responsive UI**
  - TailwindCSS-based theme with smooth typography, gradients, and mobile optimization.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React + Vite |
| Styling | Tailwind CSS |
| API | TMDB API |
| Database | Appwrite Cloud (NYC Endpoint) |
| Hooks | `react-use` (for debounce) |
| Linting | ESLint + React Hooks Rules |

---

## ⚙️ Environment Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-movie-app.git
cd react-movie-app
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Add a `.env.local` file in the project root:

```bash
VITE_TMDB_API_KEY = "YOUR_TMDB_API_KEY"
VITE_APPWRITE_PROJECT_ID = "YOUR_APPWRITE_PROJECT_ID"
VITE_APPWRITE_DATABASE_ID = "YOUR_APPWRITE_DATABASE_ID"
VITE_APPWRITE_COLLECTION_ID = "YOUR_APPWRITE_COLLECTION_ID"
VITE_APPWRITE_ENDPOINT = "https://nyc.cloud.appwrite.io/v1"
```

> 🧠 Never commit your `.env.local` file to GitHub.

### 4. Start the Development Server

```bash
npm run dev
```

Access the app at **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 Project Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── appwrite.js
 ├── components/
 │    ├── MovieCard.jsx
 │    ├── Search.jsx
 │    └── Spinner.jsx
 ├── index.css
 ├── App.css
 └── assets/
      ├── hero.png
      ├── search.svg
      ├── star.svg
      ├── no-movie.png
```

---

## 🧠 API References

* **TMDB API** → [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)
* **Appwrite Cloud** → [https://cloud.appwrite.io/](https://cloud.appwrite.io/)

---

## 🎨 UI Preview

Figma Design File:
[https://www.figma.com/design/kdu6x1bqzyCMbzezudt6s2/Movie-App-w%2F-React](https://www.figma.com/design/kdu6x1bqzyCMbzezudt6s2/Movie-App-w%2F-React)

---

## 🧰 Key Components

### `MovieCard.jsx`

Displays movie posters, titles, ratings, languages, and release years with graceful fallbacks.

### `Search.jsx`

Controlled search input component that triggers debounced API requests.

### `Spinner.jsx`

Accessible animated loader displayed during fetch operations.

### `appwrite.js`

Handles trending movie analytics — `updateSearchCount()` and `getTrendingMovies()`.

---

## 🧩 ESLint Configuration

ESLint is configured via `eslint.config.js` with React Hooks and Vite plugin presets.
To check for lint issues:

```bash
npm run lint
```

---

## 📜 License

MIT License © 2025 Will Brooks

---

## 🧠 Credits

Built by **Will Brooks** using:

* React + Vite
* Tailwind CSS
* Appwrite Cloud
* TMDB API

```
```
