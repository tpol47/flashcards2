import React, {useState} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import './flashcards.css'
import ReactCardFlip from 'react-card-flip';

const Flashcards = () => {
    const [ isFlipped, setIsFlipped ] = useState(true)
    const [ flipClass, setFlipClass ] = useState('')
    const [ cardSide, setCardSide ] = useState('front')
    const handleClick = () => {
        setIsFlipped(!isFlipped)

        if(cardSide !== 'front') {
            setFlipClass('')
            setCardSide('front')
        }
        else {
            setFlipClass('flip-horizontal-bottom')
            setCardSide('back')
        }
    }
    return (
        <div>
            <div onClick={() => handleClick()} className={flipClass}>
                {cardSide === 'front' ? <CardFront handleClick={handleClick} />
                 : <CardBack handleClick={handleClick} /> }
            </div>
            {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
                {/* <CardFront handleClick={handleClick} /> */}
                {/* <CardBack handleClick={handleClick} /> */}
            {/* </ReactCardFlip> */}
        </div>
    )
}

export default Flashcards