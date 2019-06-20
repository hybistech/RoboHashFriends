import React from 'react';


const Card = ({name, email, id, phone}) => {
    return (
        <div className= "white  ma2 dib pa2 grow br3 bw2 shadow-5" >
            <img alt="robot" src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2><span>Name:</span> {name}</h2>
                <p><span>Email:</span> {email}</p>
                <hr></hr>
                <p><span>Phone:</span> {phone}</p>
            </div>
        </div>
    )
}

export default Card;