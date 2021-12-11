import styled from 'styled-components'


const MyAccountDropdown = () => {
  return (
    <Dropdown>
      <Dropbtn>Profile</Dropbtn>
      <Dropdowncontent>
        <a href="#">Link</a>
        <a href="#">Link</a>
      </Dropdowncontent>
    </Dropdown>
  )
}


const Dropbtn = styled.div `
  background-color: #04AA6D;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  :hover {
    background-color: #3e8e41;
  }
`;

const Dropdown = styled.div ` 
  position: relative;
  display: inline-block;
  :hover {
    display: block;
    background-color: #3e8e41;
  }
`

const Dropdowncontent = styled.div `
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
  }
  :hover {
    display: block;
  }
`

export default MyAccountDropdown;

