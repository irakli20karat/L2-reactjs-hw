export default function PetCard({ details }) {
    return (
        <div className="card">
            <div className="card-emoji">{details.emoji}</div>
            <h3>{details.name}</h3>
            <p>{details.descriptions}</p>
            <button className="button">Adopt {details.name}</button>
        </div>
    )
}