
import { useEffect, useState } from 'react'
import './ProgresBar.css'


const wait = (time: number) => new Promise((res) => {
    setTimeout(() => res(true), time)
})


function ProgresBar({ isLoading, stopFn }: { isLoading: boolean, stopFn: (() => void) }) {
    const [widthValue, setWidthValue] = useState(0)

    useEffect(() => {
        if (!isLoading) {
            return
        }

        let id = 0
        let value = 0;
        setWidthValue(0)

        setTimeout(() => {
            id = setInterval(() => {
                value = value + 1

                setWidthValue(value)

                if (value >= 100) {
                    stopFn()

                    clearInterval(id)
                }
            }, 50)
        }, 100)

        return () => { console.log(id); id && clearInterval(id) }
    }, [isLoading])

    return (
        <>
            <div className='mainBar-container'>
                <div className='intoBar-container' style={{ width: `${widthValue}%` }}></div>
            </div>
        </>
    )
}

export default ProgresBar