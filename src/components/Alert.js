import React, {useContext} from 'react'
import {AlertContext} from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }

    return (
        <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
            <div>
            <strong>Внимание!</strong>
            {alert.text}
            </div>
            <button onClick={hide} className=" btn close" type="button" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}