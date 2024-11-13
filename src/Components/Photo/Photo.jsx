import React from "react";
import { PHOTO_GET } from "../../Api";
import Error from "../Helper/Error";
import useFetch from "../../Hooks/useFetch";
import PhotoContent from "./PhotoContent";
import { useParams } from "react-router-dom";
import Loading from "../Helper/Loading";

const Photo = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) return <section className="container mainContainer"><PhotoContent single={true} data={data} /></section>;
  else return null;
};

export default Photo;
