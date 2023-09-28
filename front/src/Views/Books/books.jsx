import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, orderBooks, getAuthor, getPublisher, getYear,
getGender, filter, reset, searchBook, setError } from "../../redux/actions";
import Paginado from "../../components/Paginado/paginado";
import CardList from "../../components/CardList/cardList";
import Nav from "../../components/Nav";
//import css

function Books() {
    const dispatch = useDispatch();
    

    //define estados para paginacion y filtros
    const [currentPage, setCurrentPage] = useState(
        parseInt(localStorage.getItem("currentPage")) || 1
    );
    const booksPerPage = 10;
    const indexLastBook =  currentPage * booksPerPage;
    const indexOfFirstBook = indexLastBook - booksPerPage;

    //MANEJA PAGINADO
    useEffect(() => {
        const storedCurrentPage = localStorage.getItem("currentPage");
        if (storedCurrentPage) {
          setCurrentPage(parseInt(storedCurrentPage));
          localStorage.removeItem("currentPage");
        }
      }, []);

    //GUARDA PAGINA ACTUAL
    useEffect(() => {
        localStorage.setItem("currentPage", currentPage.toString());
      }, [currentPage]);
    
      const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

      return (
        <div>
            <div>
                <Nav>

                </Nav>
            </div>
            
            <div>
                <Paginado
                booksPerPage={booksPerPage}
                paginado={paginado}
                currentPage={currentPage}
                />
            </div>

            <div>
                <CardList/>
            </div>
        </div>
      )
}