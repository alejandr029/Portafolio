import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Individual_project from './components/Project/Individual_Project/Individual_project.tsx';
import { Header } from './components/header/header.tsx';
import { Userdata } from './components/index.tsx';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/portafolio" element={<Home />} />
        
        <Route path="/Individual_project/:number" element={<Individual_project />} />

        <Route path="*" element={<Navigate  to="/portafolio" replace />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Home() {
  return (
    <>
      <Header />
      <Userdata />
    </>
  )
}

export default App
