import { memo, useEffect, useState } from "react";

import { getPost, updataPost } from "./fetchers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function Home() {
  //without react query

  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   getPost().then((res) => setPosts(res));
  // }, []);
  // dengan react query
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["postCacheKey", page],
    queryFn: () => getPost(page),
    staleTime: Infinity, // setiap  remount as component tidak akan refetch
    // gcTime: 0, // hapus cache dangan waktu
    // refetchInterval: 5000,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (body: any) => updataPost(body),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["postCacheKey"] });
    },
  });
  const handleClick = async () =>
    mutate({ body: "bar", title: "wkwkwkwk", userId: 1, id: 1 });

  if (isError) {
    return <p>Error nya= {JSON.stringify(error.message)}</p>;
  }
  if (isLoading) {
    return <p>Loading....</p>;
  }
  return (
    <small>
      <button onClick={handleClick}>post new data</button>
      <br />
      <div className="" style={{ display: "flex", gap: 40 }}>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
          prev
        </button>
        <button onClick={() => setPage((p) => p + 1)}>next</button>
      </div>
      <>
        {/* {data?.map((res: any, i: number) => ( */}
        <div className="">
          <h2>
            {data?.id}, {data?.title}
          </h2>
          <p>{data?.body}</p>
        </div>
        {/* ))} */}
      </>
    </small>
  );
}

export default Home;
