import Book from "./Book"
export default function Bookshelf({books, title, bookStatus, updateBookStatus}){
    books = books.filter(book =>{
        return book.shelf === bookStatus
    })
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                {
                    books.map((book) =>(
                        <Book 
                            key={book.id}
                            book={book}
                            updateBookStatus={updateBookStatus}
                            bookStatus={bookStatus}
                        />
                    ))
                }
                </ol>
            </div>
        </div>
    )
}