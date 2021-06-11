import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import { sendQuery, getAdsQuery } from './graphqlHelper';
// import { useSelector, useDispatch } from 'react-redux'
import { adsSelector, decrement, fetchAds, incrementByAmount } from './redux/slices/adsSlice'
import { /*useAppSelector,*/ useAppDispatch } from './redux/hooks'
import { useSelector } from 'react-redux';

function App() {

  // const count = useAppSelector((state) => state.ads.value)
  const dispatch = useAppDispatch()
  const ads = useSelector(adsSelector)
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vamalaka - Madagascars peer-to-peer e-commerce platform</h1>
        <div onClick={()=>dispatch(decrement())}>DEC</div>
        <div onClick={()=>dispatch(incrementByAmount(10))}>+10</div>
        <div onClick={()=>dispatch(fetchAds(7))}>GET ADS</div>
        <div>{ads?.map((ad)=>{

          return (<div key ={ad.id}>username: {ad.username} , title: {ad.title}</div>)
        })}</div>
      </header>
    </div>
  );
}



export default App;


