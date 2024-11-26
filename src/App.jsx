import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
    return (
        <>
            <Router>
                <Header />
                <main className="container content">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/category/:name" element={<Category />} />
                        <Route path="/meal/:id" element={<Recipe />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </>
    );
}
export default App;
