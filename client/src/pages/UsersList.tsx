import { useEffect } from "react"
import {useDispatch} from "react-redux"
import { getUsers } from "../api/ApiCalls"
import { setData } from "../store/UserSlice"
import UserListDisplay from "../components/user list/UserListDisplay"
import AddUser from "../components/user list/AddUser"

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
      <div className="grid auto-rows-min border-2 w-screen p-4 gap-12 justify-center  min-h-screen">
          <h1>
              Welcome to User List Page
          </h1>
          <div className="grid auto-rows-min gap-8 mx-auto">
            <AddUser/>
            <UserListDisplay/>
          </div>
      </div>
    )
  }