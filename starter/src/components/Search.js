import React, { useState, useEffect } from "react"
import { search } from "../BooksAPI";
import {Link} from "react-router-dom"
import Book from "./Book";

export default function Search(props){
    const [query, setQuery] = useState("")
    const [books, setBooks] = useState ([])
    const myBooks = props.books

    const correctBooks = (booksResults, myBooks) =>{
        let correctBooks = []
        booksResults.map((book) =>{
            myBooks.map((myBook) =>{
                if(myBook.id === book.id){
                    book = {
                        ...book,
                        shelf: myBook.shelf
                    }
                }
                return ""
            })
            correctBooks= [...correctBooks, book]
            return ""
        })
        return correctBooks
    }
    
    useEffect(()=>{
        if(query.length > 0){
        
            const getBooks = async () =>{
                let booksResults = await search(query, 20)
                booksResults.error === "empty query" 
                ? setBooks([]) 
                : setBooks(booksResults)
            }
            getBooks()
        }else{
            setBooks([])
        }
    },[query])

    const handleChange = (value) =>{
        setQuery(value)
    }
    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link
                className="close-search"
                to="/"
                >
                Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange={(event) => handleChange(event.target.value)}
                    value={query}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        correctBooks(books, myBooks).map((book) =>(
                            <Book 
                            key={book.id}
                            book={book}
                            bookStatus={book.shelf}
                            updateBookStatus={props.updateBookStatus}
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}