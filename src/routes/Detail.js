import { useEffect } from "react";
import { useParams} from "react-router-dom";
import { useState } from "react";

function Detail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setDetail(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  });
  return (
    <div>
        <h1>{detail.title}</h1>
        <img src={detail.medium_cover_image} alt={detail.title} />
        <p>{detail.description_full}</p>
        
    </div>

  )
}
export default Detail;
