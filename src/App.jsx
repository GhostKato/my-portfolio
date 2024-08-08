import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from './components/Loading/Loading';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


function App() { 

  return (
    <>
      <Header />
      <Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<HomePage />} />        
        <Route path='*' element={<NotFoundPage />} />
        </Routes>
        </Suspense>      
      <Footer/>
    </>
  )
}

export default App
