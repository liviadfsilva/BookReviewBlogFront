import Navbar from './components/Navbar'
import Header from "./components/Header";
import Recentposts from "./components/Recentposts"

export default function App() {
  return (
    <div className="bg-[#F3EEEA] min-h-screen">
      <Header />
      <Navbar />
      <Recentposts />
    </div>
  );
}

