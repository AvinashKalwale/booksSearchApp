import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
// import Card from './Card';
function App() {
  const [books, SetBooks] = useState()
  const [output, setOutput] = useState([])

  const changeBooks = (e) => {
    e.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${books}`)
      .then((res) => {
        console.log(res)
        setOutput(res.data.items)
      })
  }

  return (
    <div className="App">
      <div className='header'>BOOK SEARCH</div>
      <div className='container'>
        <input placeholder='Search here...'
          onChange={(e) => {
            SetBooks(e.target.value)
          }} type="text" value={books} /> <button onClick={changeBooks} type='submit'>Search</button>
        <div className='book'>
          {output.map((value) => {
            return <div>
              <img className='books-info' alt='books'
                src={value.volumeInfo.imageLinks.thumbnail}
                
              // src={value.searchInfo.selfLink} 
              />
            </div>
          })}
        </div>
      </div>
      {/* <Card cards={"volumeInfo"}/>    */}
    </div>
 
  );
}
export default App;
