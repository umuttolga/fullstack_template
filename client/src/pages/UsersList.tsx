import { useEffect } from "react"
import {useDispatch} from "react-redux"
import { getUsers } from "../api/ApiCalls"
import { setData } from "../store/UserSlice"
import UserListDisplay from "../components/user list/UserListDisplay"
import AddUser from "../components/user list/AddUser"
import { styles } from "../styles/styles"

export const UsersList = () => {
    const dispatch = useDispatch()
    useEffect( () => {
        const userData = async () => {
          const data = await getUsers()
        //   console.log(import.meta.env.VITE_API_URL)
        dispatch(setData(data))
        }
        userData()
    }, [])
    return (
      <div className={styles.mainSectionContiner}>
          <h1 className={styles.headerStyle}>
              Welcome to User List Page
          </h1>
          <div className={styles.sectionStyle}>
            <AddUser/>
            <UserListDisplay/>
          </div>
      </div>
    )
  }