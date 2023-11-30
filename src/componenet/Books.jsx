import { useState } from "react"

import { books as bookData} from "../constants/mockData"
import BookCard from "./BookCard"
import Sidecard from "./Sidecard"
import SearchBox from "./searchbox"

import styles from "./books.module.css"

function Books() {

  const [books,setBooks]=useState(bookData)
  const [search,setSearch]=useState([])
  const [liked,setLiked]=useState([])

  const handlelLikedList =(book ,status)=>{
    if (status){
      const newLikedlist=liked.filter((i)=> i.id !== book.id)
      setLiked(newLikedlist)
    }else{
      setLiked((liked)=>[...liked,book])
    }
  }

  const serchHandler = ()=>{
    if (search){
      const newBooks = bookData.filter(book =>book.title.toLocaleLowerCase().includes(search));
      setBooks(newBooks)
    }else{
      setBooks(bookData)
    }
  }

  return (
    <>
     <SearchBox search ={search} setSearch={setSearch} serchHandler={serchHandler}/>
        <div className={styles.container}>
        <div className={styles.cards}>
          {books.map(book => <BookCard  key={book.id}  data={book} handlelLikedList={handlelLikedList}/>)}
        </div>
        <div className={styles.favorite}>
          <h4>Favorites</h4>
          {!!liked.length && (<div>{liked.map(book => <Sidecard key={book.id} data={book} />)}</div>)}
        </div>
       </div>
    </>
  )
}

export default Books