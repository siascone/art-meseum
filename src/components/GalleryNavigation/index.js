import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css"

const GalleryNavigation = (props) => {
    const {galleries} = props
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/">Home</NavLink>
            <ul>
                {
                    galleries.map((gallery, i) => {
                        return (
                            <li>
                                <NavLink to={`/galleries/${gallery.id}`} key={`${gallery.id}${i}`}>{gallery.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
};

export default GalleryNavigation;