import Book from "./Book"
import React from "react"
export default function Bookshelf(props){

    let books = props.books
    const title = props.title !== undefined ? props.title : ""
    const bookStatus = props.bookStatus !== undefined ? props.bookStatus : ""
    const updateBookStatus = props.updateBookStatus
    if (bookStatus){
        books = books.filter(book =>{
            return book.shelf === bookStatus
        })
    }
    return(
        <div className="bookshelf">
            {
                title ? 
                <h2 className="bookshelf-title">{title}</h2>
                : ""
            }
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    books ?
                    books.map((book) =>(
                        <Book 
                            key={book.id}
                            book={book}
                            updateBookStatus={updateBookStatus}
                            bookStatus={bookStatus}
                        />
                    ))
                    : ""
                }
                </ol>
            </div>
        </div>
    )
}