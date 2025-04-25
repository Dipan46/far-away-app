import Items from "./Items";
import { useState } from "react";

function PackingList({ items, onDeleteItem, onTOoggleItems, handleClear }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItem;

    if (sortBy === "input") {
        sortedItem = items;
    } else if (sortBy === "description") {
        sortedItem = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortBy === "packed") {
        sortedItem = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));
    }

    return (
        <div className="list">
            <ul>
                {sortedItem.map((item) => (
                    <Items
                        item={item}
                        key={item.id}
                        onDeleteItem={onDeleteItem}
                        onTOoggleItems={onTOoggleItems}
                    />
                ))}
            </ul>
            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packes Status</option>
                </select>
                <button onClick={handleClear}>Clear List</button>
            </div>
        </div>
    );
}

export default PackingList;