function Stats({ items }) {
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const per = Math.round((numPacked / numItems) * 100);

    if (!items.length) {
        return (
            <footer className="stats">
                <em>🧳Start adding what to pack🧳</em>
            </footer>
        );
    }

    return (
        <footer className="stats">
            <em>
                {per === 100
                    ? "🧳You are ready to GO✈️"
                    : `📦You have total ${numItems} items and ${numPacked} (${per}%) of them
                are packed📦`}
            </em>
        </footer>
    );
}

export default Stats;