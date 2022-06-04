const ArtImageTile = function(props) {
    return (
        <img src={props.art.images[0].baseimageurl} height="50px"></img>
    )
}

export default ArtImageTile