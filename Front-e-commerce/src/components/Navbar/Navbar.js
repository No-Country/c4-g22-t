import {useState} from "react";
import styled from "styled-components";
import {MagnifyingGlass} from '@styled-icons/entypo/MagnifyingGlass'
import BurguerButton from './Burguer.js'

function Navbar () {
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
  
    setClicked(!clicked)
  }
    return(
        <NavContainer>
          <h2>LOGO</h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#">Home</a>
          <a onClick={handleClick} href="#">Pages</a>
          <a onClick={handleClick} href="#">Products</a>
          <a onClick={handleClick} href="#">Blog</a>
          <a onClick={handleClick} href="#">Shop</a>
          <a onClick={handleClick} href="#h"></a>
        </div>
              <div>
          <Input type="text" /> 
          <RedZap />
          </div>
          <div className='burguer'  >
          <BurguerButton clicked={clicked} handleClick={handleClick}  />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </NavContainer>
    );
}
export default Navbar
const NavContainer = styled.nav`
h2{
  color: black;
  font-weight: 100;
  font-family: 'Josefin Sans';
  font-size:35px;
}
padding: .4rem;
background-color: rgba(62, 61, 68, 0.05);
display: flex;
align-items: center;
justify-content: space-between;
a{
  color: black;
  font-family: 'Lato';
  text-decoration: none;
  margin-right: 1rem;
  font-size:16px;
}
.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  transition: all .5s ease;
  a{
    color: black;
    font-size: 2rem;
    display: block;
  }
  @media(min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: black;
      display: inline;
    }
    display: block;
  }
}
.links.active{
  width: 100%;
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  a{
    font-size: 2rem;
    margin-top: 1rem;
    color: white;
  }
}
.burguer{
  @media(min-width: 768px){
   
    display: none;
    
  }
}
`

const BgDiv = styled.div`
background-color: #222;
position: absolute;
top: -1000px;
left: -1000px;
width: 100%;
height: 100%;
z-index: -1;
transition: all .6s ease ;

&.active{
  border-radius: 0 0 80% 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  margin-right:0px;
  Height: 15px;
  border:solid;
  border-color:  #E7E6EF;
  }
`
const RedZap = styled(MagnifyingGlass)`
  color: white;
  background: #FB2E86;
  width: 35px;
  Height: 40px ;
  margin-bottom:5px;

  background-border-color: #E7E6EF;  
`