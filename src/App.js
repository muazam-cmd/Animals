import './App.css';
import { useState } from 'react';
import AnimalShow from './Animal.Show'

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

console.log(getRandomAnimal());

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />;
    });
    return (
        <div className="app">
            <button onClick={handleClick}>Add Animals.</button >
            <div className="animal-list">{renderedAnimals}</div>
        </div >
    );
}

export default App;