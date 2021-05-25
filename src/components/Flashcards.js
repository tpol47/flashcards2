import React, {useState} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'
import './flashcards.css'
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';

import ReactCardFlip from 'react-card-flip';

const cards = [
    {
        front: 'front 1', 
        back: 'back 1'
    },
    {
        front: 'front 2', 
        back: 'back 2'
    },
    {
        front: 'front 3', 
        back: 'back 3'
    },
    {
        front: 'front 4', 
        back: 'back 4'
    },
    {
        front: 'front 5', 
        back: 'back 5'
    },
    {
        front: 'front 6', 
        back: 'back 6'
    },
    {
        front: 'front 7', 
        back: 'back 7'
    },
]

const Flashcards = () => {
    const [ isFlipped, setIsFlipped ] = useState(true)
    const [ flipClass, setFlipClass ] = useState('')
    const [ cardSide, setCardSide ] = useState('front')
    const [showAll, setShowAll] = useState(false)
    const [currentCard, setCurrentCard] = useState(1)

    
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
            <Switch
                checked={showAll}
                onChange={() => setShowAll(!showAll)}
                color="primary"
                name="showAll"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span className="button">
                <Button variant="contained" color="primary" onClick={() => cards[currentCard - 1] && setCurrentCard(currentCard - 1)}>
                    previous
                </Button>
            </span>
            <span className="button" >
                <Button variant="contained" color="primary" onClick={() => cards[currentCard + 1] && setCurrentCard(currentCard + 1)}>
                    next
                </Button>
            </span>
            {!showAll ? 
                <div onClick={() => handleClick()} className={flipClass}>
                    {cardSide === 'front' ? <CardFront handleClick={handleClick} content={cards[currentCard].front} />
                    : <CardBack handleClick={handleClick} content={cards[currentCard].back} /> }
                </div>
                : <div className='showAll'>
                    {cards.map(card => (
                        cardSide === 'front' ? <CardFront handleClick={handleClick} content={card.front} />
                        : <CardBack handleClick={handleClick} content={card.back} />
                    ))}
                </div>
            }
            {/* <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical"> */}
                {/* <CardFront handleClick={handleClick} /> */}
                {/* <CardBack handleClick={handleClick} /> */}
            {/* </ReactCardFlip> */}
        </div>
    )
}

export default Flashcards