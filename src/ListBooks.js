import React, { Component } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import { getAll } from "./BooksAPI";

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelvedBooks: [],
      shelves: {
        currentlyReading: "Currently Reading",
        wantToRead: "Want to Read",
        read: "Read"
      }
    };

    getAll().then(response => this.setState({ shelvedBooks: response }));
  }

  refreshShelves = () => {
    getAll().then(response => this.setState({ shelvedBooks: response }));
  };
  render() {
    const { shelvedBooks, shelves } = this.state;
    const shelvesForSearch = Object.keys(shelvedBooks).map(book => {
      return { id: shelvedBooks[book].id, shelf: shelvedBooks[book].shelf };
    });

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {Object.keys(shelves).map(
            shelfName => (
              <div className="bookshelf" key={shelfName}>
                <h2 className="bookshelf-title">{shelves[shelfName]}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {shelvedBooks
                      .filter(book => book.shelf === shelfName)
                      .map(
                        book => (
                          <li key={book.id}>
                            <Book
                              book={book}
                              title={book.title}
                              authors={book.authors}
                              thumbnail={book.imageLinks.thumbnail}
                              refreshShelves={this.refreshShelves}
                              shelf={book.shelf}
                            />
                          </li>
                        ) //end of JSX
                      ) //end of map
                    }
                    {/*end of inner block*/}
                  </ol>
                </div>
              </div>
            ) // end of outer JSX block
          ) // end of outer map
          }
        </div>
        <Link
          to={{ pathname: "/search", state: shelvesForSearch }}
          className="open-search"
        >
          <button>Search Books</button>
        </Link>
      </div>
    );
  }
}

export default ListBooks;
