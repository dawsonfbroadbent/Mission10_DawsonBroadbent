
import { useEffect, useState } from 'react';
import './BowlerList.css';
import type {bowler} from './types/bowler';

function BowlerList() { 

    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowler = async () => {
            const response = await fetch('https://localhost:5000/api/Bowlers')
            const data = await response.json();
            setBowlers(data);
        }
        fetchBowler();
    }, []);

    return (
        <section className="bowler-list">
            <h1 className="bowler-list__title">Bowlers</h1>
            <div className="bowler-list__table-wrap">
                <table className="bowler-list__table">
                    <thead>
                        <tr>
                            <th>Bowler Name</th>
                            <th>Team Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bowlers.map((bowler) => (
                                <tr key={bowler.bowlerId}>
                                    <td>{bowler.bowlerName}</td>
                                    <td>{bowler.teamName}</td>
                                    <td>{bowler.bowlerAddress}</td>
                                    <td>{bowler.bowlerCity}</td>
                                    <td>{bowler.bowlerState}</td>
                                    <td>{bowler.bowlerZipCode}</td>
                                    <td>{bowler.bowlerPhoneNumber}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default BowlerList;
