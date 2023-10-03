import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home/Home'
import Create from './Views/Create/Create'
import Detail from './Components/Detail/Detail'
import Nav from './Components/Nav/Nav'
import ReviewForm from './Components/ReviewForm/ReviewForm'
import LogIn from "./Views/LogIn/LogIn"
import Books from "./Views/Books/books"
import Success from './Components/Success/Success'
import Register from './Views/Register/Register'
import Users from './Components/Users/Users'
import { BACKEND_URL } from '../utils'
<<<<<<< HEAD
import './App.css'
// import NewsList from './Components/News/News'
import { CartProvider } from "./Components/Cart/CartContext/CartContext";
import CartList from './Components/Cart/CartList/CartList'
=======
import { CartProvider } from "./Components/Cart/CartContext/CartContext";
>>>>>>> a73b6d6 (empezando carrito)

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // const [errorApi, setErrorApi] = useState(false);  // NUEVO PARA TESTCOMPONENT / FILTROS
  // const [books, setBooks] = useState([]); // NUEVO PARA TESTCOMPONENT / FILTROS
  // const [isLoading, setIsLoading] = useState(false);  // NUEVO PARA TESTCOMPONENT / FILTROS

  // useEffect(() => { // NUEVO PARA TESTCOMPONENT / FILTROS
  //   fetchAllBooks();
  // }, []);

  // const fetchAllBooks = async () => { // NUEVO PARA TESTCOMPONENT / FILTROS
  //   setIsLoading(true);
  //   try {
  //     const response = await axios.get(`${BACKEND_URL}/books/filters`);
  //     setBooks(response.data);
  //     setErrorApi(false);
  //   } catch (error) {
  //     setErrorApi(true);
  //   }
  //   setIsLoading(false);
  // };

  return (
    <div className={darkMode ? 'dark' : ''}>
          <CartProvider>
            <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/product-page/:id' element={<Detail/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/books' element={<Books/>}/>
          <Route path='/order-approved' element={<Success/>}/>
          <Route path='/review' element={<ReviewForm/>}/>
          <Route path='/admin/users' element={<Users/>}/>
          <Route path='/cart' element={<CartList/>}/>


        </Routes>
        </CartProvider>
      </div>
  )
}

export default App
