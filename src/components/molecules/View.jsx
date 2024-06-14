import Image from "../atoms/Image";
import Label from "../atoms/Label";
import '../molecules/View.css'

function View(props){
    return(
        <div id="View-sec">
            <Image image={props.image}></Image>
            <Label text={props.text}></Label>
        </div>
    )
}


export default View;