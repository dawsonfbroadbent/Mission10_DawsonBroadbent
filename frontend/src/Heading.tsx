import './Heading.css';

function Heading() {
    return (
        <header className="heading">
            <div className="heading__content">
                <h1 className="heading__title">Bowling League Directory</h1>
                <p className="heading__description">
                    This application displays bowler information from the Bowling League database
                    for members of the Marlins and Sharks teams. It provides a simple view of each
                    bowler&apos;s name, team, address, city, state, zip code, and phone number through
                    a React frontend powered by an ASP.NET API.
                </p>
            </div>
        </header>
    );
}

export default Heading;