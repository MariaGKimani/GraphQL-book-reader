// import React, { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import "./styles.css";
// const GET_BOOK = gql`
//   query GetBook {
//     getBook {
//       title
//       author
//       pages {
//         pageIndex
//         content
//       }
//     }
//   }
// `;

// const BookComponent = () => {
//   const { loading, error, data } = useQuery(GET_BOOK);
//   const [currentPageIndex, setCurrentPageIndex] = useState(0);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;
//   const book = data.getBook;
//   const pages = book.pages;
//   const leftPageIndex = currentPageIndex * 2;
//   const rightPageIndex = leftPageIndex + 1;
//   const leftPage = pages[leftPageIndex];
//   const rightPage = pages[rightPageIndex];
//   const goToNextDoublePage = () => {
//     if (currentPageIndex < Math.floor(pages.length / 2) - 1) {
//       setCurrentPageIndex(currentPageIndex + 1);
//     }
//   };
//   const goToPreviousDoublePage = () => {
//     if (currentPageIndex > 0) {
//       setCurrentPageIndex(currentPageIndex - 1);
//     }
//   };
//   return (
//     <div className="book-container">
//       <div className="book">
//         <h2>{book.title}</h2>
//         <p>Author: {book.author}</p>
//       </div>
//       <div className="image-container">
//         <img src="./image.jpg" alt="pic" />
//       </div>
//       <div className="double-page-container">
//           <h3 className="left-page-index">Page {leftPage.pageIndex}</h3>
//         <div className="left-page">
//           <p>{leftPage.content}</p>
//           <button onClick={goToPreviousDoublePage}>Previous Double Page</button>
//         </div>
//           <h3 className="right-page-index">Page {rightPage.pageIndex}</h3>
//         <div className="right-page">
//           <p>{rightPage.content}</p>
//           <button onClick={goToNextDoublePage}>Next Double Page</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BookComponent;

import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./styles.css";

// Define your GraphQL query to fetch both books
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
  // Use state to track the selected book
  const [selectedBook, setSelectedBook] = useState("book1");

  // Fetch data using the GraphQL query
  const { loading, error, data } = useQuery(GET_BOOKS);

  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Get the selected book's data based on the state
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
      {/* Display book categories */}
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
