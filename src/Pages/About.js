import React from 'react'
import axios from 'axios'

function BtnClick() {
    const btn = document.querySelector('.btn');
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
        console.log(response.data)
    }).catch(error => {
        console.error(error);
    })
}

export const About = () => (
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-4">Какая-то инфа</h1>
            <p className="lead">Версия приложения <strong>1.0</strong></p>
            <button type="button" className="btn btn-primary" onClick={BtnClick}>Placeholder API</button>
        </div>
    </div>
)