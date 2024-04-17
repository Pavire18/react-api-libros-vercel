import "./BooksPage.scss";
import useFetch from "../../hook/useFetch";
import React from "react";

const API_URL = `${process.env.REACT_APP_API_URL}/book`;

const BooksPage = () => {
  const [books] = useFetch(API_URL);

  return (
    <div className="pokemons-page page">
      <div className="page__content pokemons-page__content">
        <div className="pokemons-page__pokemon-list">
          {console.log(books)}
          {books?.data.map((book, index) => (
            <ul key={index}>
              <li key={book.id}>{book.title}({book?.author?.name})</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
