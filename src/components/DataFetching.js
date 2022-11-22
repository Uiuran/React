import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

export function DataFetching() {

    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setPosts(res.data)
        }).catch( err => {
            console.log(err)
        })
        
    },[id])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}></input>
            <ul> {posts.title}
                {/*
                    posts.map(posts => (<li key={posts.id}>{posts.title}</li>))
    */}
            </ul>
        </div>
    )
}
