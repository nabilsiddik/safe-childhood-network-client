export const getCurrentUser = async() => {
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`, {
            method: 'GET',
            credentials: 'include',
            cache: 'no-store'
        })

        const data = await res.json()

    }catch(err: any){
        console.log('Error while retriving current user')
        return null
    }
}