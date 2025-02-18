import React from 'react';

export default function Post(props){
    return (
        <>
            <article>
                <h3>{props.post.title}</h3>
                <small>{props.post.subtitle}</small>
            </article>
            <br/>
        </>
    )
}