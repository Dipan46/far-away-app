import "./App.css";
import Form from "./assets/Form";
import Logo from "./assets/Logo";
import Stats from "./assets/Stats";
import React, { useState } from "react";
import PackingList from "./assets/PackingList";

// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: true },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
//     { id: 3, description: "Charher", quantity: 2, packed: false },
// ];

function App() {
    const [items, setItems] = useState([]);

    function handleClick(id) {
        console.log(id);
    }

    function handleAddItems(item) {
        setItems((prev) => [...prev, item]);
    }

    function handleDeleteItem(id) {
        setItems(items.filter((item) => item.id != id));
    }

    function handleToggleItem(id) {
        setItems((items) =>
            items.map((prev) =>
                prev.id === id ? { ...prev, packed: !prev.packed } : prev
            )
        );
    }

    function handleClear() {
        const confirm = window.confirm("Are you sure");
        if (confirm) setItems([]);
    }

    return (
        <div>
            <Logo />
            <Form onAddItems={handleAddItems} />
            <PackingList
                items={items}
                click={handleClick}
                onDeleteItem={handleDeleteItem}
                onTOoggleItems={handleToggleItem}
                handleClear={handleClear}
            />
            <Stats items={items} />
        </div>
    );
}

export default App;
