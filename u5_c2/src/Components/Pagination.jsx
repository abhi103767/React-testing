import { useEffect, useState } from "react";
export const Pagination = ({ total, selected, onPageChange }) => {

  const [pervBtn, setPervBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(false);
  const [currentPage, setCurrentPage] = useState(selected || 1)



  let page = []
  for (let i = 1; i <= total; i++) {
    page.push(i);
  }
  return <div className="pageContainer" >

    <button  onClick={() => {

      if (currentPage === 2) {
        setCurrentPage(currentPage - 1)
        setPervBtn(true)
      }
      else {
        setCurrentPage(currentPage - 1)
        setNextBtn(false);
      }
      onPageChange();

    }} disabled={pervBtn}>
      &lt;
    </button>

    {
      page.map((item, i) => {
        return <button className={i + 1 === currentPage ? 'selected' : ''}>{item} </button>
      })
    }

    <button onClick={() => {
      if (currentPage === total - 1) {
        setCurrentPage(currentPage + 1);
        setNextBtn(true)
      }
      else {
        setCurrentPage(currentPage + 1)
        setPervBtn(false);
      }
      onPageChange();

    }} disabled={nextBtn}>
      &gt;
    </button>

  </div>;
};
