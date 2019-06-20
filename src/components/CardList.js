import React from 'react';
import Card from '../components/Card';

const CardList = ({robots}) => { 
        
    return (
        <div>
        {
            //Mapping through the robots list to make it dynamic
            robots.map((user, i) => 
            <Card 
                key={i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}
                phone={robots[i].phone}
                    
            /> )         
        }
        </div>  
    );

}

export default CardList;