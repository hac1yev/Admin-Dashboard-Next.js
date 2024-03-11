"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.css";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);

  const ITEM_PER_PAGE = 2

  let hasPrev = parseInt(page) > 1;
  let hasNext = parseInt(page) < count / ITEM_PER_PAGE;

  const handlePagination = (arg) => {
    if(arg === "prev") {
      params.set("page", parseInt(page) - 1);
    }else{
      params.set("page", parseInt(page) + 1);
    }
    router.replace(`${pathname}?${params}`);
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handlePagination("prev")}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handlePagination("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;