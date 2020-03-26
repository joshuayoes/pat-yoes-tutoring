import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/contactItem.module.css'

/**
 * ContactItem Component
 * @augments {Component<Props, State>}
 */
const ContactItem = ({icon, alt, contact, link}) => {
    return (
        <a href={link} className={style.a}>
            <img src={icon} alt={alt} />
            <p>{contact}</p>
        </a>
    )
}

ContactItem.propTypes = {
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default ContactItem