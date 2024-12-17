import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import BlogPage from './pages/BlogPage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/common/Footer';
import { RecipeProvider } from './context/RecipeContext';

function App() {
  return (
    <RecipeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </RecipeProvider>
  );
}

export default App;