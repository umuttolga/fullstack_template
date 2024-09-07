import { useEffect } from "react"
import LoginForm from "../components/auth/LoginForm"
import { styles } from "../styles/styles"

export const Login = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
  }
  useEffect(() => {
    handleLogout()
  }, [])
  return (
    <section className={styles.mainSectionContiner}>
        <h3 className={styles.headerStyle}>Login Screen</h3>
        <LoginForm />
    </section>
  )
}