export const getUsers = async () => {
    try {
        const response = await fetch(`${import.meta.env.API_URL}/users`)
        
        console.log(response)
        
    } catch (error) {
        console.error(error)
    }
}