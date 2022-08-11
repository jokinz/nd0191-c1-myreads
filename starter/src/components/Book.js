import { useState } from "react"
import React from "react"


export default function Book(props){
    const id = props.book.id
    const title = props.book.title
    const authors = props.book.authors
    const image = props.book.imageLinks ? props.book.imageLinks.thumbnail : ""
    const updateBookStatus = props.updateBookStatus
    
    const [bookStatus, setBookStatus] = useState(props.bookStatus)
    
    const handleChange = (event) =>{
        setBookStatus(event.target.value)
        updateBookStatus(id, event.target.value)
    }

    return(
        <li key={id}>
            <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                        `url("${image}")`
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select onChange={handleChange} value={!bookStatus ? "none" : bookStatus}>
                        <option disabled>
                        Move to...
                        </option>
                        <option value="currentlyReading">
                        Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">
                    {
                        authors !== undefined 
                        ? authors.map((author)=>(
                            `${author} `
                        ))
                        : "No author to show"
                    }
                </div>
            </div>
        </li>
    )
}