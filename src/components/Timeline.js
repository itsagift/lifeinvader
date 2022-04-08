import { useEffect, useState } from 'react';

//useEffect = allows you to do effects when something is loaded. RUN IT IN COMPONEN!
const Timeline = () => {
  const [posts, setPosts] = useState([])
  useEffect( ()=> {
    ( async () => {
      let req = await fetch("https://raw.githubusercontent.com/rmdashrfv/lifeinvader/main/src/data/posts.json");
      let res = await req.json();
      setPosts(res)
    }) ()
  }, [])
  return (
    <div>
      <h2>Timeline</h2>
        {
          posts.map((element) => {
            return(
              <div>
                <p>Post by {element.username}</p>
                <p>{element.content}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default Timeline;