import React from 'react'

function Alert(props) {
    return (
        props.showalertt && <div className={`alert alert-${props.showalertt.typee} container`} role="alert">
            {props.showalertt.msg}
        </div>
    )
}

export default Alert
