import React, { useEffect, useState } from 'react';
import { getClubFixtures } from './services/api';

const App = () => {
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFixtures = async () => {
            try {
                const data = await getClubFixtures(33); // Replace 33 with your club's ID
                setFixtures(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching fixtures:', error);
                setLoading(false);
            }
        };

        fetchFixtures();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h1>My Football Club</h1>
            <ul>
                {fixtures.map((fixture) => (
                    <li key={fixture.fixture.id}>
                        <p>
                            {fixture.teams.home.name} vs {fixture.teams.away.name} -{' '}
                            {fixture.fixture.status.short === 'NS'
                                ? new Date(fixture.fixture.date).toLocaleString()
                                : fixture.goals.home + ' - ' + fixture.goals.away}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;