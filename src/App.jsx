import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrease1, increase1, remove1 } from "./store/item1Slice";
import { decrease2, increase2, remove2 } from "./store/item2Slice";
import { decrease3, increase3, remove3 } from "./store/item3Slice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(false)

  //1
  const item1 = useSelector((store) => store.item1.value);
  const item1Increase = () => {
    dispatch(increase1());
  };
  const item1Decrease = () => {
    dispatch(decrease1());
  };
  // 2
  const item2 = useSelector((store) => store.item2.value);
  const item2Increase = () => {
    dispatch(increase2());
  };
  const item2Decrease = () => {
    dispatch(decrease2());
  };
  // 3
  const item3 = useSelector((store) => store.item3.value);
  const item3Increase = () => {
    dispatch(increase3());
  };
  const item3Decrease = () => {
    dispatch(decrease3());
  };
  const countity = item1 + item2 + item3;
  return (
    <>
    <div style={{filter: cart? `blur(5px)` :`blur(0px)`}}>
      <h1>Choose Item</h1>
      <div className="main">
        <div className="div">
          item 1
          <div style={{ display: "flex" , alignItems: 'center'}}>
            <button onClick={item1Increase}>+</button>
            <p>{item1}</p>
            <button onClick={item1Decrease}>-</button>
          </div>
         
        </div>
        <div className="div">
          item 2
          <div style={{ display: "flex" , alignItems: 'center'}}>
            <button onClick={item2Increase}>+</button>
            <p>{item2}</p>
            <button onClick={item2Decrease}>-</button>
          </div>
        
        </div>
        <div className="div">
          item 3
          <div style={{ display: "flex" , alignItems: 'center'}}>
            <button onClick={item3Increase}>+</button>
            <p>{item3}</p>
            <button onClick={item3Decrease}>-</button>
          </div>
       
        </div>
      </div>
      </div>
   
      <div className="shop" style={{display:cart? 'flex' : 'none'}}>
      
        <div className="item">
          <h1>item 1 {item1}</h1>
          <button 
            onClick={() => dispatch(remove1())}
            className="material-symbols-outlined"
          >
            delete
          </button>

        </div>
        <div className="item">
          <h1>item 2 {item2}</h1>
          <button
            onClick={() => dispatch(remove2())}
            className="material-symbols-outlined"
          >
            delete
          </button>

        </div>
        <div className="item">
          <h1> item 3 {item3}</h1>
          <button
            onClick={() => dispatch(remove3())}
            className="material-symbols-outlined"
          >
            delete
          </button>

        </div>
      </div>
      <span class="material-symbols-outlined" style={{cursor:'pointer', position:'absolute', top: '15px', right: '15px' }} onClick={() => setCart(!cart)}>shopping_cart {countity}</span>
    </>
  );
}

export default App;
