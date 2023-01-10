import React, { useState } from "react";


const SignUp = () => {

    const [user, setUser] = useState({
        first_Name: "",
        last_Name: "",
        email_address: "",
        password: "",
    })
    const [error, setError] = useState('')

    const handleInputChange = (event) => {
        event.preventDefault()
        setUser(event.target.value)

    }



    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label htmlFor="firstName"> First Name</label>
                    <input
                        required
                        defaultValue={''}
                        id="firstName"
                        name="firstName"
                    />
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name</label>
                    <input
                        required
                        defaultValue={''}
                        id="lastName"
                        name="lastName"
                    />
                </div>
                <div>
                    <label htmlFor="emailAddress"> Email</label>
                    <input
                        required
                        defaultValue={''}
                        id="emailAddress"
                        name="emailAddress"
                    />
                </div>
                <div>
                    <label htmlFor="password"> Password</label>
                    <input
                        required
                        defaultValue={''}
                        id="password"
                        name="password"
                    />
                </div>
                <div>
                    <label htmlFor="passwordConfirm"> Confirm Password</label>
                    <input
                        required
                        defaultValue={''}
                        id="passwordConfirm"
                        name="passwordConfirm"
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUp