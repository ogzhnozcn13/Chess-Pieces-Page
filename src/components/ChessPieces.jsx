import Pieces from "./Pieces";


const ChessPieces = (props) => {

    const {data} = props
    console.log(data);

    return (
        <div className="row">
            {data.map((item) => {
                return(
                    <Pieces key={item.id} {...item}/>
                )
            })}
        </div>
    )
}

export default ChessPieces