import { useRef } from "react"
import { styles } from "../../styles/styles"
import { addUser, changeUserCreds } from "../../api/ApiCalls"
import { useParams } from "react-router-dom"

const AddUser = ({put}:any) => {
    const nameRef = useRef()
    const emailRef = useRef()
    const {userId} = useParams()

    const handlePostUser = async (e:any) => {
        e.preventDefault()
        //@ts-ignore
        const response = await addUser(nameRef.current.value,emailRef.current.value)
        console.log(response)
        window.location.reload()
    }

    const handlePutUser = async (e:any) => {
      e.preventDefault()
      //@ts-ignore
      const response = await changeUserCreds(userId,nameRef.current.value,emailRef.current.value)
      console.log(response)
      window.location.reload()
  }

  return (
    <div className="grid grid-rows-2 w-full auto-rows-min gap-4">
        {/* @ts-ignore */}
        <input ref={nameRef} className={styles.inputStyle} type="text" id='name' placeholder="Username"/>
        {/* @ts-ignore */}
        <input ref={emailRef} className={styles.inputStyle} type="email" id='email' placeholder="Email"/>
        <button className={styles.buttonStyle} onClick={put ? handlePutUser : handlePostUser}>{put ? "Change User Creds" : "Add User"}</button>
    </div>
  )
}

export default AddUser