import React, { useEffect, useState } from "react";

const Home = () => {
    const [airing, setAiring] = useState([]);
    const [pagination, setPagination] = useState();
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/anime?status=airing&airing=true&page=${page}`)
            .then(data => data.json())
            .then(data => {
                console.log(data.data);
                setPagination(data.pagination);
                setAiring(data.data);
            });
    }, [page]);
    const handleNext = () => {
        if (pagination?.has_next_page) setPage(page + 1);
    };
    const handlePrev = () => {
        if (page > 0) setPage(page - 1);
    };

    return (
        <div>
            <button onClick={handlePrev}>Prev Page</button>
            <button onClick={handleNext}>Next Page</button>
            {airing?.map(x => (
                <div key={x.mal_id}>
                    <img src={x.images.jpg.large_image_url} alt={x.title} />
                    <h1>{x.title_english || x.title}</h1>
                </div>
            ))}
        </div>
    );
};

export default Home;
