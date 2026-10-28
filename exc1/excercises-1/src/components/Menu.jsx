import { useState } from "react"

function Card({ details }) {
    const [isPurchased, setIsPurchased] = useState(false)

    const handleClick = () => {
        setIsPurchased(true);
    }

    return (
        <div className="card">
            <div className="card-emoji">{details.emoji}</div>
            <h3>{details.title}</h3>
            <p>{details.description}</p>
            <div className="price">${details.price.toFixed(2)}</div>
            {!isPurchased ? <div className="button" onClick={handleClick}>Order Now</div> :
                <div className="button" style={{ "backgroundColor": "green" }}>Purchased</div>}
        </div>
    )
}

export default function Menu() {
    return (
        <section className="menu">
            <h2>Our Favorites</h2>

            <div className="card-list">
                <Card details={{
                    emoji: "☕",
                    title: "Classic Latte",
                    description: "Smooth and creamy coffee made with fresh milk.",
                    price: 4.50
                }} />

                <Card details={{
                    emoji: "🥐",
                    title: "Fresh Croissant",
                    description: "A golden, buttery pastry baked fresh every morning.",
                    price: 3.00
                }} />

                <Card details={{
                    emoji: "🍰",
                    title: "Chocolate Cake",
                    description: "A rich chocolate dessert for your afternoon break.",
                    price: 5.00
                }} />
            </div>
        </section>
    )
}