import React, { useState, useEffect } from "react"
import Book from "./Book"
import { search } from "../BooksAPI";
import {Link} from "react-router-dom"



export default function Search(props){
    const [query, setQuery] = useState("")
    const [books, setBooks] = useState ([])

    useEffect(()=>{
        if(query.length >0){
            const getBooks = async () =>{
                const booksResult = await search(query, 1)
                booksResult.error === "empty query" ? console.log("No results found") : setBooks(booksResult)
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
                        books.map((book) =>(
                            <Book 
                            key={book.id}
                            book={book}
                            updateBookStatus={props.updateBookStatus}
                            />
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}