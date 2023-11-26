import React,{useState} from 'react'
import "./style.css";
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import {addItem, delItem} from '../../../redux/actions/index'



const CardsMultiple = ({ filteredCards }) => {
    const[page,setPage] = useState(1);


    const dispatch = useDispatch()

    const handleCart = (product) => {
        dispatch(addItem(product))
        
        
    }

    const handleChange =(e,value)=>{
        e.preventDefault();
        setPage(value)

    }
    return (
        <>{console.log("cardsMultiple", typeof(filteredCards))}
        {
            filteredCards ? (

                <div>
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    {filteredCards.filter((e,i)=> {
        return i>= 5*(page-1) && i<= 5*(page-1)+4 
      }).map((element,id) => {
        console.log(element.id)
                        return (
                            <div className='col-md-3 w-auto' key={id}>
                                <div className="card text-center" >
                                    <div className="card-img">
                                     <img src={element.image} alt="Image 1" className="card-img-top"/>
                                    </div>
                                <div className="card-body text-dark ">
                                    <h4 className="card-title card-text">{element.title}</h4>
                                    <h5 className="card-title card-text">{element.price}$</h5>
                                    <button onClick={()=>handleCart(element)} className="btn btn-outline-primary ">Add to Cart</button>
                                 </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
                {filteredCards && <Pagination count={filteredCards && Math.ceil(filteredCards?.length/5)}    onChange={handleChange} page={page} variant="contained"   shape="rounded" />}
            </div>

            ):(<div className='loading'>Loading.........its take some time</div>)
        }
        </>
    )
}

export default CardsMultiple;