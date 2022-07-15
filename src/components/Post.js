import React from 'react';

export default function Post({data}) {
 return(
    <ul>
    {data.map(d=> {
    return(
            <li key={d.id}>
                {d.title}
            </li>
    )
    })}
    </ul>
 )
};


