import React from 'react';


const Card = ({name, email, id}) => {
    return (
        <div className= "bg-white ma2 dib pa3 grow br3 bw2 shadow-5" >
            <img alt="robot" src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;