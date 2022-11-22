import React, { Component } from "react";
import { useNavigate } from "react-router-dom"


export class LikeButton extends Component {

    constructor(){
        super();
        this.state = {
            like: false,
        }
    }
  
    render(){

        if(this.state.like){

            return 'Good to see you liked'

        }else{

            return React.createElement(
                'button',
                {
                    onClick: () => {this.setState({like : true})},
                },
                'Like'
            );
        }
    }
}

  export function RedirectButton() {

    const navigate = useNavigate();

    const redirectPage = () => {    
        navigate('newpage.html');
    } 

    return React.createElement(
        'button',
        {
            onClick: () => redirectPage(),
        },
        'Approve'      
    );
  }