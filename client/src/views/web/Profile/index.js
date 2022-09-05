import React from 'react'
import { Container } from 'react-bootstrap'

const Profile = () => {
    return (
        <Container>
             <div className="mt-20">
                <h1>Halaman Profile</h1> 
                <p> Ini adalah halaman profile yang hanya bisa di akses oleh user yang sudah login dan terverifikasi token.</p>
            </div>
        </Container>
    )
}

export default Profile