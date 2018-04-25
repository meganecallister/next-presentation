import React, { Component } from 'react';
import axios from 'axios';


export default class Home extends Component {
    static async getInitialProps({req}) {
        let dogs = await axios.get('https://dog.ceo/api/breeds/image/random')

        return {dogPics: dogs.data.message}
    }


    constructor(props) {
        super(props);
        this.state = {
            dogs: ''
        }
    }


    render() {
        return (
            <div>
                Welcome Bruh!
                <img src={this.props.dogPics}/>
            </div>
        )
    }
}
