import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import StartListPage from '@/components/Card/pages/StartListPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starter-pack" element={<StartListPage />} />
      </Routes>
    </BrowserRouter>
  );
};
