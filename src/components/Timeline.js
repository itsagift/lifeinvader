import { useEffect, useState } from 'react';

//useEffect = allows you to do effects when something is loaded. RUN IT IN COMPONEN!
const Timeline = () => {
    const [posts, setPosts] = useState([])
    useEffect(async () => {
        console.log("Rendering timeline")
        let req = await fetch("https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json");
        let res = await req.json();
        setPosts(res);
    }, [])
    return (
        <div>
            <h2>Timeline</h2>
            {
                posts.map((element) => <h1></h1>)
            }
        </div>
    )
}

export default Timeline;