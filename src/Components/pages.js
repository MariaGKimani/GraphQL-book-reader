import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./styles.css";

const GET_BOOK = gql`
  query GetBook {
    getBook {
      title
      author
      pages {
        pageIndex
        content
        tokens {
          position
          value
        }
      }
    }
  }
`;
const BookComponent = () => {
  const { loading, error, data } = useQuery(GET_BOOK);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const book = data.getBook;
  const pages = book.pages;
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
    <div className="">
      <div className="book">
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
      </div>
      <div className="fixed">
      <img src="./image.jpg" alt="pic"></img>

<div className="double-page-container">
  <div className="left-page">
    <h3  className="left-page-index">Page {leftPage.pageIndex}</h3>
    <p>{leftPage.content}</p>

    <button onClick={goToPreviousDoublePage}>Previous Double Page</button>
  </div>
  <div className="right-page">
    <h3 className="left-page-index">Page {rightPage.pageIndex}</h3>
    <p>{rightPage.content}</p>
    {/* Add token display logic if needed */}
    <button onClick={goToNextDoublePage}>Next Double Page</button>
  </div>
</div>
      </div>
      
    </div>
  );
};
export default BookComponent;
