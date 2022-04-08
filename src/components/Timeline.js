import { useEffect, useState } from 'react';
import Post from './Post';

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
          posts.map((post) => {
            return(
              <Post key={post.id} post={post} />
            )
          })
        }
    </div>
  )
}

export default Timeline;