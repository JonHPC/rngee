//./src/components/Words.js
import React, {useState} from "react";
import "./styles/Words.css";

export default function Words(){
    const [word, setWord] = useState("Generate a random word");

    const words = ["Apple", "Box", "Car", "Disastrous", "X-ray", "Choke", "Small", "Writing", "Tendency", "Morning", 
    "Magic", "Back", "Ajar", "Machine", "Check", "Mend", "Dispensable", "Abashed", "Wish", "Giants", "Plausible", 
    "Bashful", "Sink", "Press", "Sneaky", "Annoy", "Lovely", "The", "Quick", "Brown", "Fox", "Jumped", "Over", 
    "Lazy", "Dog", "Cat", "Rabbit", "Deer", "Koala", "Kangaroo", "Snake", "Bug", "Snail", "Spider", "Bird", "Eagle", 
    "Water", "Gas", "Metal", "Blood", "Iron", "Steel", "Bronze", "Poison", "Ice", "Fire", "Wind", "Sunny", "Cloudy", "Shopping", "Airplane",
    "Flight", "License", "Pants", "Jeans", "Dentist", "Doctor", "Nurse", "Pilot", "Teacher", "Fire Fighter", "Politician", "Parasite",
    "Predator", "Prey", "Amazon", "Jungle", "Forest", "Plains", "Ocean", "Seas", "Desert", "Desserts", "Cake", "Candy", "Pie", "Oatmeal",
    "Fruit", "Blueberry", "Raspberry", "Blackberry", "Pear", "Peach", "Plum", "Avocado", "Cartels", "Mexico", "United States", "Canada",
    "America", "Brazil", "Columbia", "Chile", "Peru", "Europe", "England", "France", "Germany", "Italy", "Rome", "Belgium", "Poland",
    "Spain", "Ukraine", "Crimea", "Sweden", "Finland", "Denmark", "Russia", "China", "Japan", "Asia", "Korea", "Taiwan", "Australia", "New Zealand",
    "India", "Vietnam", "Cambodia", "Nation", "State", "Country", "Border", "Police", "Military", "Weapons", "Gun", "Missle", "Jet", "Tank",
    "Bullets", "Happy", "Sad", "Angry", "Depressed", "Hungry", "Melancholy", "Anxious", "Nervous", "Hyper", "Excited", "Drugs", "Math",
    "Science", "English", "Reading", "Writing", "Tests", "Social", "Delicious", "Treats", "Drink", "Alcohol", "Splendid", "Candid", "Fast",
    "Slow", "Clear", "Cloud", "Rain", "Snow", "Sleet", "Mist", "Fog", "Dust", "Slowly", "Carefully", "Gently", "Gentleman", "Ladies",
    "Cars", "Trains", "Tires", "Wheels", "Gasoline", "Petroleum", "Silver", "Gold", "Tin", "Platinum", "Stardust", "Crusaders", "Shield",
    "Sword", "Spear", "Bow", "Arrow", "Death", "Eternity", "Justice", "Judgement", "Angle", "Angel", "Demon", "Monster", "Slayer", 
    "Static", "Media", "Class", "Name", "Generate", "Word", "Length", "Width", "Height", "Dimensions", "Time", "Space", "Galaxy", "Universe",
    "Peace", "World", "Globe", "Local", "International", "National", "Olympics", "Network", "Internet", "Computer", "Skate", "Swim", "Run",
    "Fly", "Jog", "Jump", "Canoe", "Boat", "Shot", "Ship", "Container", "Cargo", "Fuel", "Emmissions", "Pollution", "Globalization", 
    "Currency", "Money", "Dough", "Buck", "Cloth", "Bread", "Cheese", "Steak", "Beef", "Pork", "Chicken", "Hamburger", "Nuggets", "Pair",
    "Thrice", "One", "Dozen", "Eggs", "Shoes", "Socks", "Thread", "Silk", "Nylon", "Rayon", "Cotton", "Wool", "Plastic", "Titanium",
    "Hydrogen", "Boron", "Carbon", "Fiber", "Helium", "Potassium", "Sodium", "Oxygen", "Nitrogen", "Lithium", "Solar", "Argon", "Uranium",
    "Plutonium", "Nuclear", "Reactor", "Planets", "Earth", "Venus", "Mars", "Mercury", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto",
    "Comet", "Asteroid", "Shooting Stars", "Sun", "Stars", "Burning", "Electricity", "Cached", "Modules", "Manifest", "Framework",
    "Rules", "Node", "React", "Loaders", "Note", "That", "View", "Browser", "Host", "Built", "Tower", "Brick", "Cement"

    ];

    const generateWord = () => {
        let index = Math.floor(Math.random() * words.length);
        setWord(words[index]);
    }

    return(
        <div className="words">
            <h1>{word}</h1>
            <button onClick={generateWord} className="words__btn">Generate Word</button>
        </div>
    );
}