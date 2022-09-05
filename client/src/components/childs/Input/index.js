import React from 'react'
import { FormGroup } from 'react-bootstrap'
import './Input.scss'

const Inputs = ({label, ...rest}) => {
    return (
        <>
            <FormGroup floating>
                <input className="input" {...rest} />
                <label for={label} className={label}>{label}</label>
            </FormGroup>
        </>            
    )
}

export default Inputs