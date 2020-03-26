import React, {useState} from 'react'
import {TextField} from '@material-ui/core'
import style from '../styles/booking.module.css'

const Booking = () => {
    const [formInput, setFormInput] = useState({
        firstName: '',
        email: '',
        phone: '',
        descriptionOfNeeds: '',
    });

    const handleChange = (inputType, value) => setFormInput({...formInput, [inputType]: value})

    const [requestSent, setRequestSent] = useState(false);
    const [requestError, setRequestError] = useState(false);

    const postData = async (url, data) => {
        const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        postData('https://getform.io/f/5d72b9dd-f1f1-4360-a1a6-7c387be5f432', formInput)
            .then(() => {
                setRequestSent(true)
    
                console.table(requestSent, requestError)
            })
            .catch((error) => {
                console.log(error);
                setRequestError(true);    
                console.table(requestSent, requestError)
            });
    }
    
    return (
        <div>
            <h1 className={style.h1}>Book Your First Free Appointment</h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    name="name"
                    label="Full Name" 
                    fullWidth 
                    required
                    onChange={(event) => handleChange('firstName', event.target.value)}    
                />
                <TextField
                    name="email" 
                    type="email"
                    label="Email" 
                    fullWidth
                    required
                    onChange={(event) => handleChange('email', event.target.value)}
                />
                <TextField 
                    name="tel"
                    type="tel"
                    id="phone" 
                    label="Phone"
                    required
                    fullWidth 
                    onChange={(event) => handleChange('phone', event.target.value)}
                />
                <TextField 
                    id="needs" 
                    label="What does your child need?" 
                    multiline 
                    fullWidth
                    onChange={(event) => handleChange('descriptionOfNeeds', event.target.value)} 
                />
                <input type="submit" value="Book" className={style.button} />
            </form>
        </div>
    )
}

export default Booking;