import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getTodo } from "../../api/axios";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id.replace(":", ""));
  const { data, isLoading, isError, refetch } = useQuery(
    "one",
    () => getTodo(params.id.replace(":", "")),
    {
      retry: 1,
    }
  );
  useEffect(() => {
    refetch();
  }, []);
  return isLoading ? (
    <div>Loading</div>
  ) : isError ? (
    <div>Error</div>
  ) : (
    <div>
      <p>{data["nickname"]}</p>
      <p>{data["title"]}</p>
      <p>{data["content"]}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
}

export default Detail;
