import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Header from "./components/Header";
import Footer from "./components/Footer"

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import BookReviewPost from "./pages/BookReviewPost";
import ReviewsPage from "./pages/ReviewsPage";
import BlogPage from "./pages/BlogPage";
import AdminHome from "./pages/AdminHome";
import BlogPostPage from "./pages/BlogPostPage";
import MakeReview from "./pages/MakeReview";
import MakePost from "./pages/MakePost";
import RatingSystem from "./pages/RatingSystem";
import FiveStarReviews from "./pages/FiveStarReviews";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  return (
    <div className="bg-[#FFFFF] min-h-screen flex flex-col">
      <Router>
        <Header />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book-review/:slug" element={<BookReviewPost />} />
            <Route path="/book-reviews/all-reviews" element={<ReviewsPage />} />
            <Route path="/blog/all-posts" element={<BlogPage />} />
            <Route path="/admin" element={<AdminHome />} />
            <Route path="/blog/post/:slug" element={<BlogPostPage />} />
            <Route path="/make-book-review" element={<MakeReview />} />
            <Route path="/edit-review/:slug" element={<MakeReview />} />
            <Route path="/make-blog-post" element={<MakePost />} />
            <Route path="/edit-post/:slug" element={<MakePost />} /> 
            <Route path="/book-reviews/rating-system" element={<RatingSystem />} />
            <Route path="/book-reviews/five-star-reviews" element={<FiveStarReviews />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:categoryName" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

