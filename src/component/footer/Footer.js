import React from 'react'

const Footer = () => {
    let footerstyle = {
        position: 'relative',
        top: '70%',
        width: '100%'
    }
    return (
        <div>

            <footer className="bg-body-tertiary text-center text-lg-start" >
                <div className="text-center p-3" style={{footerstyle }}>
                    © 2020 Copyright:
                    <a className="text-body" href="/here">vinitsarvaiya.com</a>
                </div>
            </footer>

        </div>
    )
}

export default Footer
