import React from 'react'
import style from '../styles/strength.module.css';
import PropTypes from 'prop-types';

/**
 * Strength Component
 * @augments {Component<Props, State>}
 */
const Strength = ({ svg, alt, heading, description }) => {
    return (
        <div className={style.strength}>
            <div className={style.img_wrapper}>
                <img 
                    className={style.img} 
                    src={svg} 
                    alt={alt}
                />
            </div>
            <h2 className={style.h2}>
                {heading}
            </h2>
            <p className={style.p}>
                {description}
            </p>
        </div>
    )
}

Strength.propTypes = {
    svg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Strength;