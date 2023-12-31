import styled from "styled-components";
export const ModalBackdrop = styled.div` 
    position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
   
` 

export const ModalContent = styled.div`
max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  
   
      
`

export const LoadMoreBtn = styled.button`
padding: 8px 16px;
width: 160px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    
    &:hover,
    &:focus {
  background-color: #303f9f;
}`

    

//  position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     min-height: 400px;
//     max-width: 600px;
//     width: 100%;
//     padding: 12px;
//     background-color: #fff;
//     border-radius: 3px;
    // box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    //   0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);