import Header from "./Container/Header/Header";
import Content from "./Container/Content/Content";
import Footer from "./Container/Footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;