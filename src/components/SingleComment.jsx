import { Component } from "react"
import { Button } from "react-bootstrap"

class SingleComment extends Component{
    render(){
        return(
            <li>{this.props.singleComment.rate} --- {this.props.singleComment.comment} 
            <Button className="ml-2" variant="danger" size="sm"> Delete </Button></li>
        )
    }
}

// const SingleComment =(props) => (
//         <>
//             <li>{props.singleComment.rate} --- {props.singleComment.comment} 
//             <Button variant="danger" size="sm"> Delete </Button> </li>
                         
//         </>                       
//     )


export default SingleComment