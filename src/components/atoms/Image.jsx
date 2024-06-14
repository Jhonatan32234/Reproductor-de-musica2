import styled from "styled-components";

const LabelStyled = styled.img`
width: 500px;
height: 400px;
margin-bottom: 10px;
border-radius: 5px;
border: 5px white double;
`;

function Image(props){
    return (<LabelStyled src={props.image}></LabelStyled>)

}
export default Image;