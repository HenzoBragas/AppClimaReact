import { useEffect, useState } from "react"

export const useHour = () => {
    const [time, setTime] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            const dataObject = new Date()
            const hour = dataObject.getHours()
            const minutes = dataObject.getMinutes()

            const currentTime = `${hour}:${minutes < 10 ? "0" + minutes : minutes}`
            setTime(currentTime)
        }, 1000)

        return () => clearInterval(interval)
    }, [])
    return{ time }
}
