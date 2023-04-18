const Welcome = ({imageURL, size, alt}) => {
    return (
        <img 
            style = {stylesheet}
            src = {imageURL}
            alt = {alt}
            Width = {size}
            height = {size}
        />
    )
}
export default Welcome

const stylesheet  = {
    borderRadius: '20%', 
}