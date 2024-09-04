import { styles } from "../styles/styles"

export const Home = () => {
  return (
    <section className={styles.mainSectionContiner}>
        <div className={styles.headerStyle}>
            Welcome to FullStack Template
        </div>
        <div className="grid grid-flow-row mt-12 text-[20px] bg-">
          <span>
          {"/users -> to see user's list and add user"}
          </span>
          <span>
          {"/users/<userId> -> to see a user's details"}
          </span>
        </div>
    </section>
  )
}