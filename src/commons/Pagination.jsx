import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Pagination from "react-bootstrap/Pagination"
import { pageChange } from "../store/page"

const PaginationComp = ({ pagesTotal }) => {
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()

  let active = page
  let num = 1

  if (active > 10 && active < 21) num = 11
  if (active > 20 && active < 31) num = 21
  if (active > 30 && active < 41) num = 31

  let numMult = num + 9
  if (numMult > pagesTotal) numMult = pagesTotal
  let items = []

  for (let number = num; number <= numMult; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleSelect(number)}
      >
        {number}
      </Pagination.Item>
    )
  }

  const handleSelect = number => {
    dispatch(pageChange({ page: number }))
  }

  const handleFirst = () => {
    dispatch(pageChange({ page: 1 }))
  }

  const handlePrev = () => {
    dispatch(pageChange({ page: page - 1 }))
  }

  const handleNext = () => {
    dispatch(pageChange({ page: page + 1 }))
  }

  const handleLast = () => {
    dispatch(pageChange({ page: pagesTotal }))
  }

  return (
    <>
      <div className="PaginationComp mt-5 mb-4">
        <Pagination size="lg">
          <Pagination.First
            onClick={() => {
              handleFirst()
            }}
            disabled={active === 1}
          />
          <Pagination.Prev
            onClick={() => {
              handlePrev()
            }}
            disabled={active === 1}
          />
          {items}
          <Pagination.Next
            onClick={() => {
              handleNext()
            }}
            disabled={active === pagesTotal}
          />
          <Pagination.Last
            onClick={() => {
              handleLast()
            }}
            disabled={active === pagesTotal}
          />
        </Pagination>
      </div>
    </>
  )
}

export default PaginationComp