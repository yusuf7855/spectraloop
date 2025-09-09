import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import Layout from "./components/layout/Layout.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ContactPage from "./pages/contact/ContactPage.jsx";
import CorporatePage from "./pages/corporate/CorporatePage.jsx";
import ServicePage from "./pages/service/ServicePage.jsx";
import ServicesPage from "./pages/services/ServicesPage.jsx";
import BlogPage from "./pages/blog/BlogPage.jsx";
import BlogPostPage from "./pages/blog/BlogPostPage.jsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/iletisim" element={<ContactPage/>}/>
                <Route path="/kurumsal" element={<CorporatePage/>}/>
                <Route path="/odalar" element={<ServicesPage/>}/>
                <Route path="/odalar/:serviceRoute" element={<ServicePage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/blog/:slug" element={<BlogPostPage/>}/>
            </Route>
            <Route path="*" element={<Layout freeLayout={true}><NotFoundPage/></Layout>}/>
        </Routes>
    )
}

export default App