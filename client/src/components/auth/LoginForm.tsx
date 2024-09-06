import { useRef } from "react"
import { styles } from "../../styles/styles"
import { login } from "../../api/ApiCalls"

const LoginForm = () => {
    const emailRef = useRef()
    const passRef = useRef()

    const handleLogin = async (e:any) => {
        e.preventDefault()
        //@ts-ignore
        const response = await login(emailRef.current.value,passRef.current.value)
        console.log(response)
        // window.location.reload()
    }

 

  return (
    <div className="grid grid-rows-2 w-full auto-rows-min gap-4 mt-12">
        {/* @ts-ignore */}
        <input ref={emailRef} className={styles.inputStyle} type="email" id='email' placeholder="Email"/>
        {/* @ts-ignore */}
        <input ref={passRef} className={styles.inputStyle} type="password" id='password' placeholder="Password"/>
        <button className={styles.buttonStyle} onClick={handleLogin}>LOGIN</button>
    </div>
  )
}

export default LoginForm