import PetCard from "./PetCard"

export default function Pets() {
    return (
        <section className="pets">
            <h2>Meet Our Pets</h2>
            <div className="card-list">
                <PetCard
                    details={{
                        emoji: "🐶",
                        name: "Buddy",
                        description: "A playful dog who loves running and belly rubs.",
                    }}
                />
                <PetCard
                    details={{
                        emoji: "🐱",
                        name: "Luna",
                        description: "A calm cat who loves naps in the sun.",
                    }}
                />
                <PetCard
                    details={{
                        emoji: "🐰",
                        name: "Snowball",
                        description: "A fluffy bunny who loves carrots.",
                    }}
                />
            </div>
        </section>
    )
}