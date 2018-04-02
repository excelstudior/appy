import React from 'react';

const Card = (props) =>{
    return (
        <div style={{margin:'1em',float:'left',marginLeft:'10px'}}>
            <img  width="75" src={props.url}/>
            <div style={{display:'inline-block', marginLeft:10,textAlign:'left'}}>
                <div style={{fontSize:'1.25em',fontWeight:'bold',color:'blue'}}>
                {props.name}
                </div>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

export const CardList = (props) => {
    return (
        <div>
            {props.cards.map (card => <Card key={card.id} {...card}/>)}
        </div>
    )
};