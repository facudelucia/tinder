import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import "./TinderCards.css"
import axios from "axios"
function TinderCards() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get("./data.json")
            setPeople(req.data)
        }
        fetchData()
    }, [])
    const swiped = (dir, nameToDelete) => {
        console.log("swiped")
    }
    const outOfFrame = (name) => {
        console.log("outOfFrame")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.length > 0 && people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.img})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
