import Bookshelf from "./Bookshelf";
import {Link} from "react-router-dom"

export default function Booklists({books, updateBookStatus}){
  
    return(
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    <Bookshelf 
                        books={books}
                        title="Currently Reading"
                        bookStatus="currentlyReading"
                        updateBookStatus={updateBookStatus}
                    />
                    <Bookshelf 
                        books={books}
                        title="Want to Read"
                        bookStatus="wantToRead" 
                        updateBookStatus={updateBookStatus}
                    />
                    <Bookshelf 
                        books={books}
                        title="Read"
                        bookStatus="read" 
                        updateBookStatus={updateBookStatus}
                    />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        Add a book
                    </Link>
                </div>
            </div>
        </div>
    )
}