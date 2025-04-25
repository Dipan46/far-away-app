
import { useState } from "react";

function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = {
            id: Date.now(),
            quantity,
            description,
            packed: false,
        };
        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Tell me what to pack🧳</h3>
            <select
                onChange={(e) => {
                    setQuantity(Number(e.target.value));
                }}
                value={quantity}
            >
                {Array.from({ length: 20 }, (_, idx) => idx + 1).map((num) => (
                    <option key={num} value={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                type="text"
                placeholder="Enter items..."
                value={description}
            />
            <button>Add</button>
        </form>
    );
}

export default Form;