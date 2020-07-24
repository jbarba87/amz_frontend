import React, { Component } from 'react';
import './Formulario.css';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            on: false,
            price: '',
            image: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {
    return (
        <div id="form-div" className="container" >
            <form id="main-form" onSubmit={this.handleSubmit}>
                <label> Link: </label>
                <input type="text" name="link"/>
                <input type="submit" value="Buscar" />
            </form>
            {this.state.on && 
                <div id="main-result">
                    
                    <h2>{this.state.title}</h2>
                    <img src={this.state.image} alt="Producto"></img>
                    <h2>{this.state.price}</h2>

                </div>}
        </div>
        );
    }

    handleSubmit(e){
        var txtlink = e.target.link.value;
        console.log(txtlink);

        // Cambiar link aqui
        const www = 'http://0.0.0.0:4000/cotiza'
        const link = www + '?txtLink=' + txtlink;

        console.log(link);

        // Ajax
        fetch(link)
        .then(res => res.json())
        .then((result) => {
                console.log('imagen: ' + result.imagen);
                console.log('precio: ' + result.price);
                console.log('titulo: ' + result.title);

                this.setState({ 
                    on: true,
                    price: result.price,
                    image: result.imagen,
                    title: result.title,
                 })
            });
        event.preventDefault();
    }
}

export default Formulario;