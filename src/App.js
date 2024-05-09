import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from 'components/global/Layout';

import Main from 'pages/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
