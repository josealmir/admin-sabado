
export interface ApiMessageProps {
    message: string | undefined | null,
    isSuccess: boolean | undefined | null
}

export const ApiMessage = (porps: ApiMessageProps) => {
    const { message, isSuccess } = porps
    
    if (!message) 
        return ( <> </>)

    return (
        <div className={isSuccess ? "alert alert-success mt-3 p-2" : "alert alert-danger mt-3 p-2"} role="alert">
            { message }
        </div>
    )
}