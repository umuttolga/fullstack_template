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