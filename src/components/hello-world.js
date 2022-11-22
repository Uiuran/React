import React from "react";

export function HelloWorld(props){
    const { name , surname } = props;
    return (
        <h2>Hello {name} {surname}</h2>
    );
    
}