import styled from "styled-components"

interface ErrorMessageProp  {
    message : string
}

export const ErrorMessage: React.FC<ErrorMessageProp> = ({
    message
  }) => {
    return (
       <ErrorMessageStyles>
           <span>{message}</span>
       </ErrorMessageStyles>
    )
  }

  export default ErrorMessage

  const ErrorMessageStyles = styled.div`
   padding:20px;
   background:red;
   color : white;
   width: fit-content;
  
`