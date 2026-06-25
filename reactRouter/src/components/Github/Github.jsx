import React, { useEffect } from 'react'
import { data, useLoaderData } from 'react-router-dom';

function Github() {

    const data = useLoaderData()

    // const[data, setData] = React.useState(null)
    // useEffect(() => {
    //     fetch("https://api.github.com/users/pushkarcodes10")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Repos: {data?.public_repos}
      <img src={data?.avatar_url} width={300} alt='' className='rounded-4xl'></img>
      <p>{data?.name}</p>
      <p>{data?.location}</p>
    </div>
  );
}

export default Github



export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/pushkarcodes10")
    return response.json()
}