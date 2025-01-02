import React from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


const GithubUser = () => {

  const data = useLoaderData();


  // const [data, setData] = useState(second)

  // // const {userId} = useParams();



  // useEffect(() => {

  //   fetch('https://api.github.com/users/Zaheer872004')
  //   .then(response => response.json())
  //   .then(response => setData(response))

  // }, [data])
  

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      {/* here is github userId <span className='text-orange-400'>{userId}</span> */}
      <p>{data.followers}</p>
      <img src={data.avatar_url} alt="Github Picture" width={300}/>
      <h3>{data.name}</h3>
      <h3>{data.location}</h3>
      <h3>{data.bio}</h3>
      <h3 className='text-2xl text-red-400' >Number of public repository is {data.public_repos}</h3>

    </div>
  )
}

export default GithubUser



export const GithubInfoLoader = async () => {

  const response = await fetch('https://api.github.com/users/Zaheer872004')
  return response.json();


}




























