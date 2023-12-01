import useBerries from "../hooks/useBerries";
import { BerryList } from "./BerryList";
import InfiniteScroll from "react-infinite-scroll-component";
export const Berry = () => {
  const { berries, fetchNextPage, hasMoreBerries } = useBerries();
  return (
    <>
      <InfiniteScroll
        dataLength={berries.length}
        next={fetchNextPage}
        hasMore={hasMoreBerries} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
      >
        <ul>
          <BerryList berries={berries}></BerryList>
        </ul>
      </InfiniteScroll>
    </>
  );
};
