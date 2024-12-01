import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { authService } from "./appwrite/auth.service";
import { login, logout } from "./store/authSlice";
import { Header, Footer} from './components/index'
import { Outlet } from "react-router-dom";


function App() {

  const [loding, setLoding] = useState(true);

  const dispatch = useDispatch();
  
  useEffect(() => {

    authService.getCurrentUser()
      .then(
        data => {data ? 
                    dispatch(login({userData : data})) : 
                    dispatch(logout({userData : null})) 
                  }
      )
      .finally(() => setLoding(false))

  }, [])
  

  return !loding ? 
  (
    <div className="min-h-screen flex flex-wrap text-center  bg-gray-400">
        <div className="w-full block">
          <Header />
          <main>
          TODO: <Outlet />
          </main>
          <Footer />
        </div>
    </div>
  ) 
  : 
  (
    <div> 
      Here Zaheer khan not loggedIn 
    </div>
  )
}

export default App
