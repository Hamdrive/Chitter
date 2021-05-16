import React, {useState} from 'react'
import LoginModal from './LoginModal'

function LandingPage() {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div>
            <img className="w-full h-screen" src="../images/chitter_landingbkg.jpg" alt="" />

            <button onClick={() => setModalOpen(true)}>Login</button>
            <button>Signup</button>

            <LoginModal modalOpen={modalOpen} close={() => setModalOpen(false)}/>
        </div>
    )
}

export default LandingPage
