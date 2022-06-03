import Book from "../Components/Book";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import {base_url} from "../utils/request";
import axios from 'axios';


export default function Allbooks(){
    const [books, setBooks] = useState([
        {id: 1, title: 'Hello', author: 'Murat', url: '../image/book1.png'},
        {id: 2, title: 'Hello1', author: 'Murat1', url: '../image/book2.png'},
        {id: 3, title: 'Hello2', author: 'Murat2', url: '../image/book3.png'},
    ]);

    useEffect(() => {
        axios.get(`${base_url}/api/main/`)
        .then(res => setBooks(res.data.library));
    });

    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-10">
            {books.map(book => <Book bookData={book} key={book.id} />)}
            </div>
            <Footer />
        </div>

    );
};
