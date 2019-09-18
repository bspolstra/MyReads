import React from "react";
import ShelfChanger from "./ShelfChanger";

const Book = props => {
  const { book, title, authors, thumbnail, refreshShelves, shelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${thumbnail})`
          }}
        ></div>
        {refreshShelves ? (
          <ShelfChanger
            book={book}
            refreshShelves={refreshShelves}
            shelf={shelf}
          />
        ) : (
          <ShelfChanger book={book} shelf={shelf} />
        )}
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors}</div>
    </div>
  );
};

export default Book;
