import { Link } from "react-router-dom";

const Book = (props) => {
    return (

            <div className='card-container'>
                <img
                    src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
                    alt='Books'
                    height='200'
                />
                <div className='desc'>
                    <h2>
                        <Link to={'/' + props.book._id}>{props.book.title}</Link>
                    </h2>
                    <h3>{props.book.author}</h3>
                    <p>{props.book.description} </p>
                    <p>Pages: {props.book.pages}</p>
                    <div align="right"><button
                        className="deletebtn"
                        onClick={() => {
                            props.deleteBook(props.book._id);
                        }}
                    >X</button></div>
                    
                    
                </div>
            </div>

    )
}

export default Book;