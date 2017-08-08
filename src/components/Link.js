import React from 'react'


const Link = ({ active, children, onClick }) => {
    if(active) {
        return <span className="label label-danger">{children}</span>
    }

    return (
        <a className=""
            href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
            >
            {children}
        </a>
    )
}

export default Link;
