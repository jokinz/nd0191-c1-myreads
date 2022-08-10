import "./App.css";
import Search from "./components/Search";
import Booklists from "./components/Booklists";
import { useState, useEffect } from "react";
import { get, getAll, update } from "./BooksAPI";

import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  const [books, setBooks] =  useState ([])
  const getBooks = async () =>{
      setBooks( await getAll())
  }
  useEffect(() => {
    getBooks()
    // console.log("all books: ", books)
}, [books]);
  const updateBookStatus = async(id, shelf) =>{
      const bookToUpdate = await get(id)
      console.log("update book ", bookToUpdate)
      await update(bookToUpdate, shelf)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
        exact
          path="/"
          element={
            <Booklists
              books={books}
              updateBookStatus={updateBookStatus}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              books={books}
              updateBookStatus={updateBookStatus}
            />
          }
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
