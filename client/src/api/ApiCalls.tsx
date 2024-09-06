// Find better formatting convention to handle API calls in React

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
        body: JSON.stringify({'name': name, 'email': email , "password": "defaultpassword"})
      })
      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  export const getUserDetails = async (userId:number) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}`)
        // console.log(response)
        if (response.ok){
            return response.json()
        }
    } catch (error) {
        console.error(error)
    }
}

export const changeUserCreds = async (userId:number,name:string, email:string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}`, {
      method:'PUT',
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

export const deleteUser = async (userId:number) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${userId}`, {
      method:'DELETE',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const login = async (email:string, password:string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
      method:'POST',
      headers:{
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({'password': password, 'email': email })
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}