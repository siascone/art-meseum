import { useParams } from "react-router";
import ArtImageTile from "../ArtImageTile/index"

const GalleryView = function(props) {
    let { galleryId } = useParams();
    // let params = useParams();
    // console.log(galleryId)
    // console.log(props.galleries)

    let gallery 
    
    props.galleries.forEach(gal => {
        if (gal.gallerynumber === galleryId) {
            // debugger
            gallery = gal;
        }
    })

    console.log(gallery)
    return (
        <div>
            <h1>Hello From the GalleryView</h1>
            <h2>{gallery.name}</h2>
            {
                gallery.objects.map(obj => {
                    return <ArtImageTile art={obj}/>
                })
            }
        </div>
    )
}

export default GalleryView;