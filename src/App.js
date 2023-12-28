import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useThemeMode } from 'antd-style';
import Home from './pages/Home'
import SignInPage from './pages/SignInPage'
import RegisterPage from './pages/RegisterPage';


function App() {
  const { setThemeMode } = useThemeMode('auto');
  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode');
    if (storedThemeMode) {
      setThemeMode(storedThemeMode);
    }
  }, [setThemeMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/store/sign-in' element={<SignInPage/>} />
        <Route path='/store/register' element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App