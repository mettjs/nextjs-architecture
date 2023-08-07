import useQueryParams from "@/hooks/useQueryParams";

const MovieDetail = () => {
  const movieName = useQueryParams("movieName");

  return (
    <h1>{movieName}</h1>
  )
}
export default MovieDetail;
