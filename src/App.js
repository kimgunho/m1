import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/global/Layout';
import Main from 'pages/main';
import M1UCS from 'pages/m1ucs';
import EdgeHub from 'pages/product/edgeHub';
import WinchForDrone from 'pages/product/winchForDrone';
import JiHoV2 from 'pages/product/jiHoV2';
import SvMax from 'pages/product/svMax';
import Survey from 'pages/service/survey';
import Aerolenze from 'pages/service/aerolenze';
import Company from 'pages/company';
import News from 'pages/news';
import NewsDetail from 'pages/news/detail';
import NewsWrite from 'pages/news/write';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/m1ucs" element={<M1UCS />} />
          <Route path="/product">
            <Route path="edgeHub" element={<EdgeHub />} />
            <Route path="winchForDrone" element={<WinchForDrone />} />
            <Route path="jiHoV2" element={<JiHoV2 />} />
            <Route path="svMax" element={<SvMax />} />
          </Route>
          <Route path="/service">
            <Route path="survey" element={<Survey />} />
            <Route path="aerolenze" element={<Aerolenze />} />
          </Route>
          <Route path="/company" element={<Company />} />
          <Route path="/news">
            <Route path="" element={<News />} />
            <Route path=":id" element={<NewsDetail />} />
            <Route path="write" element={<NewsWrite />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
