import React,{useState,useEffect} from 'react'
import { set } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'


function Protected({children,authentication=true}) {

    const navigate = useNavigate()
    const [loading,setLoading] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // TODO: make it  more easy to understand and simple

        // if(authStatus === true){
        //     navigate("/")
        // }
        // else if(authStatus === false){
        //     navigate("/login")
        // }

        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoading(false)

    },[authStatus,navigate,authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected