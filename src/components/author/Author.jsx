import React from 'react'

const Author = ({author}) => {
    return (
        <div>
            <h3
            className="author"
            aria-label="Author"
            >
                {author}
            </h3>
        </div>
    )
}

export default Author
