// import React, { useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import "./styles.css";
// const GET_BOOK = gql`
//   query GetBook {
//     getBook2 {
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
