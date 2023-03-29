import { useState } from "react"
import { arrowdown } from "../helpers/icons"
import { arrowup } from "../helpers/icons"


const Pieces = ({id, piece, answer}) => {

    const [show, setShow] = useState(false)

  return (
    <div className="card-group">
        {show ? 
        (<div className="card">
            <div className="ques-answer">
                <h5>{piece}</h5>
                <p>{answer}</p>
                <button onClick={() => setShow(false)}>{arrowup}</button>
                
            </div>
        </div>) : 
        (<div className="card">
        <div className="ques">
            <h5>{piece}</h5>
            <button onClick={() => setShow(true)}>{arrowdown}</button>
        </div>
    </div>)
        }
    </div>
  )
}

export default Pieces