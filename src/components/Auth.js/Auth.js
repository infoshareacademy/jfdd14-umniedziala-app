import React from 'react';
import { logIn, isTokenInStorage } from './firebaseAuth';

const REFRESH_INTERVAL = 100
const Auth = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(isTokenInStorage())
    // @TODO - loading indicator when logging in
  
    useEffect(() => {
        const id = setInterval(
          () => setLoggedIn(isTokenInStorage()),
          REFRESH_INTERVAL
        )
    
        return () => {
          clearInterval(id)
        }
      }, [])

      const onLogInClick = (email, password) => {
        return logIn(email, password)
          .then(() => {
            setLoggedIn(true)
          })
          .catch((err) => {
            alert('Error logging in!')
            console.log(err)
            setLoggedIn(false)
          })
      }
    
      return (
        !isLoggedIn ?
          <LoginForm onLogInClick={onLogInClick} />
          :
          props.children
      )
      
}