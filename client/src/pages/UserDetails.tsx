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
          <div className={styles.sectionStyle}>
        {userDetails && ( <ul key={userDetails.id}>
                  <li>{userDetails.name}</li>
                  <li>{userDetails.email}</li>
                </ul>)}
                <div className="grid grid-flow-row gap-4">
                
            <label className="font-bold">Change User Details</label>
            <AddUser put={true}/>
                </div>
          <span className="text-red-500" onClick={handleDelUser}>Remove User</span>
          </div>
      </section>
    )
  }