import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect (()=>{
    //     fetch('https://api.github.com/users/Ayush-2005-ap').then(response => response.json().then(data => {console.log(data); setData(data)}))
    // },[])
  return (
    <div className='text-center m-4 bg-sky-300 text-cyan-900 p-4 text-3xl'>
      GitHub followers: {data.followers}
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Ayush-2005-ap')
    return response.json()
}