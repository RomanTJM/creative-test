import React from 'react'

export const ImageSlider = ( { id, src, title } ) => {
    return (
        <div>
            <img
                key={id}
                src={src}
                className='slider-img'
            />
        </div>
    )
}
