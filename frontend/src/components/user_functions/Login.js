import React from "react";

const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <form>
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
            </form>
        </div>
    )
}

export default Login