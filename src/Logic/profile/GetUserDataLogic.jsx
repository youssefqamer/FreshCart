import  { useEffect, useState } from 'react'

const GetUserDataLogic = () => {
    const [userData,setUserData] = useState(null)
useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem('userData')))
}, [])

return[userData]
}

export default GetUserDataLogic