export const getUsers = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        // console.log(response)
        if (response.ok){
            return response.json()
        }
    } catch (error) {
        console.error(error)
    }
}

export const addUser = async (name:string, email:string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method:'POST',
        headers:{
          "Content-Type": 'application/json'
        },
        body: JSON.stringify({'name': name, 'email': email })
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }