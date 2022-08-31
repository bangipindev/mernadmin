import React from 'react'
import { Button } from 'react-bootstrap'
import './Submit.scss'

const Submit = ({label, ...rest}) => {
    return (
        <>
            <Button {...rest}>{label}</Button>
        </>
    )
}

export default Submit