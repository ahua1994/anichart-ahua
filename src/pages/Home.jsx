import React, { useEffect, useState } from "react";

const Home = () => {
    const [airing, setAiring] = useState([]);
    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/schedules`)
            .then(data => data.json())
            .then(data => setAiring(data.data));
    }, [airing]);

    return (
        <div>
            {airing?.map(x => (
                <>
                    <img src={x.images.jpg.large_image_url} alt={x.title} />
                    <h1>{x.title_english || x.title}</h1>
                </>
            ))}
        </div>
    );
};

export default Home;
