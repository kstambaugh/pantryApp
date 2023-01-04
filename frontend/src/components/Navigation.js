import React from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {

    const navigate = useNavigate()

    let loginActions = (
        <>
            <li >
                <a href="#" onClick={() => navigate("signup/")}>
                    Sign Up
                </a>
            </li>
            <li >
                <a href="#" onClick={() => navigate("login/")}>
                    Login
                </a>
            </li>
        </>
    )

    return (
        <nav>
            <h1>My Pantry App</h1>
            <ul>
                <li><a href="#" onClick={() => navigate('/')}>Home</a></li>
                <li><a href="#" onClick={() => navigate('/menu')}>Menu</a></li>
                <li><a href="#" onClick={() => navigate('/pantry')}>Pantry</a></li>
                <li><a href="#" onClick={() => navigate('/recipes')}>Recipes</a></li>
                <li><a href="#" onClick={() => navigate('/grocery')}>Grocery List</a></li>
            </ul>
            {loginActions}
        </nav>

    )
}