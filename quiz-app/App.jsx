import { useEffect } from 'react'

export default function App() {
    useEffect( async ()=>{
        const res = await fetch("https://opentdb.com/api.php?amount=10")
        const data = await res.json()
        console.log(data)
    }, [])

    return (
        <main>
            <h1>Quizzical</h1>
            <p>A silly game where you answer trivial (but funny!) questions</p>
            <button>Start Quiz</button>
        </main>
    )
}
