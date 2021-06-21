
import { FC } from "react";
import styled  from "styled-components";

const Container = styled.div `
  display: flex;
  gap: 5.2px;
  flex-wrap: wrap;

  @media only screen and (max-width:992pxpx) and (min-width:768px)  {
    gap: 6px;  
  }

  @media(min-width:  992px) {
      gap: 6.3px
  }

`

 export const RatingStyle: FC=({children}) => {
     return (<Container>{children}</Container>)
 }
