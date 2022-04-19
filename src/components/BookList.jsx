import { useState } from "react";
import { Container, Row} from "react-bootstrap";

import SingleBook from "./SingleBook";


const BookList = (props) =>{
    const[query, setQuery] = useState("");

   return (
    <Container>
        <Row className="justify-content-center">
            <input type="text" placeholder="Search title..." className="w-75" 
            onChange={(e)=>setQuery(e.target.value)}
            />
        </Row>
        
        <Row className="mt-4">
            {props.books
            .filter((book)=> book.title.toLowerCase().includes(query.toLowerCase()))
            .map(book=>(<SingleBook key={book.asin} book={book}/> 
            ))}
        </Row>
    </Container>
   ) 

}


export default BookList