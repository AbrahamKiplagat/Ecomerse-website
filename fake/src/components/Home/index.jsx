import React,{useState,useEffect} from 'react';
import Search from './Search';
import CardsMultiple from './CardMultiple';
import Categories from "./Categories"
import "./style.css"
import { Link } from '@mui/material';




const CHECKBOX = [
    { inpt: <input type="checkbox" />, title: "electronics"},
    { inpt: <input type="checkbox" />, title: "jewelery" },
    { inpt: <input type="checkbox" />, title: "men's clothing" },
    { inpt: <input type="checkbox" />, title: "women's clothing" },
  
]

const Home = () => {
    const [CARDS,setCARDS] = useState(null)
    const [filteredCards, setFilteredCards] = useState(CARDS);

    const filterCards = (val, type) => {
        console.log(val);
        console.log(filteredCards.length, CARDS.length);
        if (type === 'search') {
          if (val) {// if there is a value -> filter else-> return all cards
            setFilteredCards(
              CARDS.filter(element => {
                if (element.title.toLowerCase().includes(val.toLowerCase())) {
                  return element
                }
              })
            )
          } else {
            setFilteredCards(
              CARDS.filter(element => {
                return element
              })
            )
          }
        } else {
          if (val && filteredCards.length === CARDS.length) {
            setFilteredCards(
              CARDS.filter(element => {
                if (element.category.toLowerCase().includes(val.toLowerCase())) {
                  return element
                }
              })
            )
          } else {
            setFilteredCards(
              CARDS.filter(element => {
                return element
              })
            )
          }
        }
      }
    useEffect(()=>{
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://fakestoreapi.com/products", requestOptions)
  .then(response => response.text())
  .then(result => {setCARDS(JSON.parse(result))
    setFilteredCards(JSON.parse(result))
    })
  .catch(error => console.log('error', error));
        // }
        // console.log("hellojdsha")
        // fetchData()
    },[])
    return (
        <div className="App container">
        <div className="row">
          <div className="col-md-4 col-sm-4">
            <Categories CHECKBOX={CHECKBOX} filteredCards={filteredCards} setFilteredCards={filterCards} />
          </div>
          <div className="col-md-8 col-sm-8" >
            <Search filteredCards={filteredCards} setFilteredCards={filterCards} />
            <CardsMultiple filteredCards={filteredCards} setFilteredCards={filterCards} /> 
          </div>
          
        </div>
      </div>
    );
}

export default Home;
