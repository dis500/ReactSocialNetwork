import { Link } from 'react-router-dom'
import './Dialogs.css'
import './Messages'
import Messages from './Messages'

const DialogsItem = (props) => {
    return (
        <div className="dialogs__item">
            <Link to={"dialogs/" + props.id}  className="dialogs__author">{props.name}</Link>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="">
                <DialogsItem name="Igor" id="1" />
                <DialogsItem name="Max" id="2" />
                <DialogsItem name="Andrew" id="3" />
                <DialogsItem name="Sam" id="4" />
            </div>
            <div>
                <Messages />
            </div>
        </div>
    )
}

export default Dialogs