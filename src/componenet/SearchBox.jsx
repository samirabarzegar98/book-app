import { IoSearchSharp } from "react-icons/io5";
import styles from "./searchbox.module.css"

function SearchBox({search,setSearch ,serchHandler}) {
  return (
    <div className={styles.search}>
      <input 
      type="text" 
       placeholder="Search Title" 
       value={search}
       onChange={(event)=>setSearch(event.target.value.toLowerCase())}/>
       <button onClick={serchHandler}><IoSearchSharp /></button>
    </div>
  )
}

export default SearchBox