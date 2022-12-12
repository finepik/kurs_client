import {Link} from "react-router-dom";


function Menu(props) {
    //const props = {
    // title: ""
    // }
    return (
        <li className="menu_item ">
            <Link to={`/${props.link}`} className="menu_item_link">
                {props.title}
            </Link>
        </li>
    );
}

export default Menu;