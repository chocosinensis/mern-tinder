import { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3000/cards');
      const data = await res.json();

      setPeople(data.cards);
    })();
  }, []);

  return (
    <div className="tinder-cards">
      <div className="container">
        {people.length && people.map(({ name, imgurl }) => (
          <TinderCard
            className="swipe"
            key={name}
            preventSwipe={['up', 'down']}
            onSwipe={() => console.log('Removing:', name)}
            onCardLeftScreen={() => console.log(`${name} left the screen`)}
          >
            <div
              style={{ backgroundImage: `url(${imgurl})` }}
              className="card"
            >
              <h3>{name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
