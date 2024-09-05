import { useNavigate, useParams } from "react-router-dom"
import { deleteUser, getUserDetails } from "../api/ApiCalls"
import { styles } from "../styles/styles"
import { useEffect, useState } from "react"
import AddUser from "../components/user list/AddUser"

export const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({id:'', name:'', email:''})
  const {userId} = useParams()
  const nav = useNavigate()
  const handleUserDetails = async () => {
    if (userId) {
      const response = await getUserDetails(Number(userId))
      setUserDetails(response)
      // console.log(typeof(response))
    }
    
  }

  const handleDelUser = async () => {
    const response = await deleteUser(Number(userId))
    console.log(response)
    nav("/users")
  }

  useEffect(() => {
    handleUserDetails()
  },[])

    return (
      <section className={styles.mainSectionContiner}>
          <div className={styles.headerStyle}>
              Welcome to User Details Page
          </div>
          <div>
        {userDetails && ( <ul key={userDetails.id}>
                  <li>{userDetails.name}</li>
                  <li>{userDetails.email}</li>
                </ul>)}
          </div>
          <div>
            <label>Change User Details</label>
            <AddUser put={true}/>
          </div>
          <span onClick={handleDelUser}>Remove User</span>
      </section>
    )
  }