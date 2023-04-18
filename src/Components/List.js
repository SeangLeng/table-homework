function List ({product}){
    return (
        <ul>
            {
                product.map(product => 
                    <div key={product.id}>
                        <li>{product.title}</li>
                        <li>{product.id}</li>                   
                    </div>
                )
            }
        </ul>
    )
}
export default List