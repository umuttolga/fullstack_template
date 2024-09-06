import { login } from "../api/ApiCalls"
import LoginForm from "../components/auth/LoginForm"
import AddUser from "../components/user list/AddUser"
import { styles } from "../styles/styles"

export const Login = () => {
  return (
    <section className={styles.mainSectionContiner}>
        <h3 className={styles.headerStyle}>Login Screen</h3>
        <LoginForm />
    </section>
  )
}