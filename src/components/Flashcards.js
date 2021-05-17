import React, {useState} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import './flashcards.css'
import ReactCardFlip from 'react-card-flip';

const Flashcards = () => {
    const [ isFlipped, setIsFlipped ] = useState(true)
    const handleClick = () => {
        setIsFlipped(!isFlipped)
    }
    return (
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                <CardFront handleClick={handleClick} />
                <CardBack handleClick={handleClick} />
            </ReactCardFlip>
        </div>
    )
}

export default Flashcards