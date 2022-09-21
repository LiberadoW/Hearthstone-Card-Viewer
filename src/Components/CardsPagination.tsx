import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { ChangeEvent } from "react";
import Stack from "@mui/material/Stack";
import CardObject from "../Functions/CardObject";

type PaginationProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  filteredCards: CardObject[];
  pageSize: number;
  currentPage: number
};

const CardsPagination = ({
  setCurrentPage,
  filteredCards,
  pageSize,
  currentPage
}: PaginationProps) => {
  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(filteredCards.length / pageSize)}
          onChange={handlePageChange}
          page={currentPage}
          boundaryCount={1}
          shape="rounded"
        />
      </Stack>
    </div>
  );
};

export default CardsPagination;
