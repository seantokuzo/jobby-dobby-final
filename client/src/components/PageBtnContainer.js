import React from 'react'
import { useAppContext } from '../context/appContext'
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'
import Wrapper from '../assets/wrappers/PageBtnContainer'

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext()

  const prevPage = () => {
    if (page <= 1) return changePage(numOfPages)
    changePage(page - 1)
  }
  const nextPage = () => {
    if (page >= numOfPages) return changePage(1)
    changePage(page + 1)
  }

  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1)

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>

      <div className="btn-container">
        {pages.map((pageNum) => (
          <button
            type="button"
            className={pageNum === page ? 'pageBtn active' : 'pageBtn'}
            key={pageNum}
            onClick={() => changePage(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>

      <button className="next-btn" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  )
}

export default PageBtnContainer
