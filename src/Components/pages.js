import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./styles.css";


const GET_BOOKS = gql`
  query GetBooks {
    book1: getBook {
      title
      author
      pages {
        pageIndex
        content
      }
    }
    book2: getBook2 {
      title
      author
      pages {
        pageIndex
        content
      }
    }
  }
`;

const BookComponent = () => {

  const [selectedBook, setSelectedBook] = useState("book1");
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


  const bookData = data[selectedBook];
  const pages = bookData.pages;
  const leftPageIndex = currentPageIndex * 2;
  const rightPageIndex = leftPageIndex + 1;
  const leftPage = pages[leftPageIndex];
  const rightPage = pages[rightPageIndex];

  const goToNextDoublePage = () => {
    if (currentPageIndex < Math.floor(pages.length / 2) - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const goToPreviousDoublePage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  return (
    <div className="book-container">
    
      <div className="book-categories">
        <button onClick={() => setSelectedBook("book1")}>Book 1</button>
        <button onClick={() => setSelectedBook("book2")}>Book 2</button>
      </div>

      <div className="book">
        <h2>{bookData.title}</h2>
        <p>Author: {bookData.author}</p>
      </div>
      <div className="image-container">
        <img src="./image.jpg" alt="pic" />
      </div>
      <div className="double-page-container">
        <h3 className="left-page-index">Page {leftPage.pageIndex}</h3>
        <div className="left-page">
          <p>{leftPage.content}</p>
          <button onClick={goToPreviousDoublePage}><IoIosArrowBack /></button>
        </div>
        <h3 className="right-page-index">Page {rightPage.pageIndex}</h3>
        <div className="right-page">
          <p>{rightPage.content}</p>
          <button onClick={goToNextDoublePage}><IoIosArrowForward /></button>
        </div>
      </div>
    </div>
  );
};

export default BookComponent;
