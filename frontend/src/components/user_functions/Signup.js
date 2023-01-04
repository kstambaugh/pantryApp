import React from "react";

const SignUp = () => {

    return (
        <div>
            <h1>Sign Up</h1>
            <form>
                <div>
                    <label htmlFor="firstName"> First Name</label>
                    <input
                        required
                        value={""}
                        id="firstName"
                        name="firstName"
                    />
                </div>
                <div>
                    <label htmlFor="lastName"> Last Name</label>
                    <input
                        required
                        value={""}
                        id="lastName"
                        name="lastName"
                    />
                </div>
                <div>
                    <label htmlFor="emailAddress"> Email</label>
                    <input
                        required
                        value={""}
                        id="emailAddress"
                        name="emailAddress"
                    />
                </div>
                <div>
                    <label htmlFor="password"> Password</label>
                    <input
                        required
                        value={""}
                        id="password"
                        name="password"
                    />
                </div>
                <div>
                    <label htmlFor="passwordConfirm"> Confirm Password</label>
                    <input
                        required
                        value={""}
                        id="passwordConfirm"
                        name="passwordConfirm"
                    />
                </div>
            </form>
        </div>
    )
}

export default SignUp