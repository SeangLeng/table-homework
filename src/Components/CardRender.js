function CardRender({link}) {
    return (
        <tbody>
            {
                link.map(dataMap => (
                    <tr>
                        <th scope="row">{dataMap.id}</th>
                        <td>{dataMap.title}</td>
                        <td>{dataMap.price}</td>
                        <td>{dataMap.description}</td>
                    </tr>
                ))
            }
        </tbody>
    )
}
export default CardRender