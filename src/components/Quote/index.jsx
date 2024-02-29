import { useEffect, useState } from 'react'
import './styles.scss'
import axios from 'axios'
export default function Quote({ color, changeColor }) {
    const [quotes, setQuotes] = useState([])
    const [activeQuote, setActiveQuote] = useState({})

    useEffect(() => {
        axios.get('https://type.fit/api/quotes').then(res => res.data).then(data => setQuotes(data))
    }, [])

    useEffect(() => {
        randomizeQuote()
        console.log(activeQuote)
    }, [setQuotes, quotes])

    const randomizeQuote = () => setActiveQuote(quotes[Math.floor(Math.random() * quotes.length)])

    const handleClick = () => {
        randomizeQuote()
        changeColor()
    }

    const styles = {
        backgroundColor: 'white',
        color: color || 'black'
    }
    return (
        <div className="container-sm p-5 rounded-2 " id="quote-box" style={styles}>
            {
                activeQuote ? (
                    <>
                        <div className="d-flex justify-content-center align-items-center fs-2" >
                            <i className="fa-solid fa-quote-left align-self-start me-3"></i>
                            <p id="text" className="text-center">
                                {activeQuote.text}</p>
                        </div>
                        <p id="author" className='text-end fs-6'>- {activeQuote.author}</p>
                        <div className='d-flex gap-3'>
                            <button id="new-quote" onClick={handleClick} className='btn fw-semibold' style={{ backgroundColor: color, color: 'white' }}>New quote</button>
                            <a href="https://twitter.com/intent/tweet" target="_blank" id="tweet-quote" className="btn" style={{ backgroundColor: color, color: 'white' }}><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </>) :
                    <div><p className='fs-4 text-center fw-bold'>Loading...</p></div>
            }
        </div>
    )
}
