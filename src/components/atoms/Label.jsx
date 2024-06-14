import styled from 'styled-components';

const LabelStyled = styled.label`
   font-weight: 600;
   font-size: 50px;
   font-family:  Verdana;
   color: #ffffff;
`;

function Label(props){
    return (<LabelStyled >{props.text}</LabelStyled>)

}

export default Label;