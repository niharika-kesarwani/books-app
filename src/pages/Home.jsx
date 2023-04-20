import { BookCard } from "../components/BookCard";
import { useBooks } from "../main";
import "../App.css"

export const Home = () => {
    const { isLoading, allBooksList} = useBooks();
    
     return (
        <>
            <h2>All Books</h2>
            {isLoading && <h2>Loading...</h2>}
            <ul>
            {
                allBooksList.map(book => 
                    <BookCard book={book}/>
                )
            }
            </ul>
        </>
    )
}