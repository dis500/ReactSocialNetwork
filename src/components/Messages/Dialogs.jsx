import { Link } from 'react-router-dom'
import './Dialogs.css'
import './Messages'
import Messages from './Messages'

const DialogsItem = (props) => {
    return (
        <div className="dialogs__item">
            <Link to={"dialogs/" + props.id} className="dialogs__author">{props.name}</Link>
        </div>
    )
}

const Dialogs = (props) => {
    
    const dialogsElements = props.dialogs.map((dialog, key) => {
        return <DialogsItem key={key} name={dialog.name} id={dialog.id} />
    })
    
    return (
        <div className="dialogs">
            <div className="">
                {dialogsElements}
            </div>
            <div>
                <Messages />
            </div>
        </div>
    )
}

export default Dialogs