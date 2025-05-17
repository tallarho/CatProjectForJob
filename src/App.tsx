import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import CatImage from './components/CatImage'
import Checkbox from './components/Checkbox'
import styled from "styled-components";

 const Wrapper = styled.div`
    width: 500px;
    height: auto;
    border: 1px solid black;
    margin: auto;
    margin-top: 5em;
    box-sizing: border-box;
  ` 
  const Toogles = styled.div`
    border: 1px solid black;
    font-size: 20px;
    padding: 10px;
    button {
      padding: 10px
    }
  `

function App() {

    const [data, setData] = useState<string>('')
    const [toggle, setToggle] = useState<boolean>(false)

    function changeToggle(){
      setToggle(!toggle)
    }

    const fetchCat = async () => {
      const res = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await res.json()
      setData(data[0].url)
      }
      useEffect(() => {
      fetchCat()
    }, [])

  return (
    <>
      <Wrapper>
        <Toogles>
          <Checkbox fetchCat={fetchCat} changeToggle={changeToggle} toggle={toggle}/>
          <Button fetchCat={fetchCat} toggle={toggle}/>
          </Toogles>

          <CatImage img={data} />
      </Wrapper>
    </>
  );
}

export default App;
