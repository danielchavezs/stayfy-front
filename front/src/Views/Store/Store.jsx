import React from 'react';
import { useEffect } from "react"
import {useDispatch} from "react-redux"
import CardList from "../../Components/CardList/cardList"
import Filters from '../../Components/Filters/Filters'
import { getAuthors, getFilteredBooks, getGenres, getPublishers } from "../../redux/actions"

const Store = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        // dispatch(getBooks())
        dispatch(getFilteredBooks())
        dispatch(getPublishers())
        dispatch(getAuthors())
        dispatch(getGenres())
    }, [])

    return (
        <div className="bg-stone-400 dark:bg-gray-900 h-full">
            <Filters/>
            <CardList />
        </div>
    );
};

export default Store;