import React from 'react'
import PropTypes from 'prop-types'


export default function Alerts(props) {
    const capitalise = (word)=>{
        const w =word.toLowerCase();
        return w.charAt(0).toUpperCase() + w.slice(1);

    }
    return (
        props.alert && 
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show center`} role="alert" >
            <strong>{capitalise(props.alert.type)} : {props.alert.message}</strong>
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>*/}{/* it is for close button in alert message*/}
        </div>
    )
}

