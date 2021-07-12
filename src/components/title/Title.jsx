import React from 'react'

const Title = ({title}) => {
    return (
        <div>
            <h2
            className="title"
            aria-label="Title"
            >
                {title}
            </h2>
        </div>
    )
}

export default Title
