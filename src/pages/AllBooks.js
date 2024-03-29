import Book from "../Components/Book";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { base_url } from "../utils/request";
import axios from "axios";
import image from "../image/book2.png";
import BreadCrumbs from "../Components/BreadCrumbs";

const route = [
  { name: "Главная", route: "/" },
  { name: "Библиотека", route: "/" },
];

export default function Allbooks() {
  const [books, setBooks] = useState([
    { id: 1, title: "Hello", author: "Murat", image: image },
    { id: 2, title: "Hello1", author: "Murat1", image: image },
    { id: 3, title: "Hello2", author: "Murat2", image: image },
  ]);

  useEffect(() => {
    axios
      .get(`${base_url}/api/main/`)
      .then((res) => setBooks(res.data.library));
  });

  return (
    <div>
      <Header />
      <BreadCrumbs routes={route} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto gap-10">
        {books.map((book) => (
          <Book data={book} key={book.id} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
