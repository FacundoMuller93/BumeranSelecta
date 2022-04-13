import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Pagination from "react-bootstrap/Pagination"
import { pageChange } from "../store/page"

const PaginationComp = ({ pagesTotal }) => {
  const page = useSelector(state => state.page)
  const dispatch = useDispatch()
  
  let active = page
  let items = []
  

  for (let number = 1; number <= pagesTotal; number++) {
    if (active < 10) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => handleSelect(number)}>
        {number}
      </Pagination.Item>
    )
    }
    // if (active >= 11) {
    //   items.push(
    //     <Pagination.Item key={number} active={number === active} onClick={() => handleSelect(number)}>
    //       {number}
    //     </Pagination.Item>
    //   )
    // }
  }
  
  const handleSelect = (number) => {
    dispatch(pageChange({page: number}))
  }

  const handleFirst = () => {
    dispatch(pageChange({page: 1}))
  }

  const handlePrev = () => {
    dispatch(pageChange({page: (page - 1)}))
  }

  const handleNext = () => {
    dispatch(pageChange({page: page + 1}))
  }

  const handleLast = () => {
    dispatch(pageChange({page: pagesTotal}))
  }

// console.log("PAGE_PAGG", page)

  return (
    <>
      <div className="PaginationComp mt-5 mb-4">
        <Pagination size="lg">
          <Pagination.First onClick={()=>{handleFirst()}} disabled={active === 1}/>
          <Pagination.Prev onClick={()=>{handlePrev()}} disabled={active === 1}/>
          {items}
          <Pagination.Next onClick={()=>{handleNext()}} disabled={active === pagesTotal}/>
          <Pagination.Last onClick={()=>{handleLast()}} disabled={active === pagesTotal}/>
        </Pagination>
      </div>
    </>
  )
}

export default PaginationComp

{
  /* <Pagination>
<Pagination.First />
<Pagination.Prev />
<Pagination.Item>{1}</Pagination.Item>
<Pagination.Ellipsis />

<Pagination.Item>{10}</Pagination.Item>
<Pagination.Item>{11}</Pagination.Item>
<Pagination.Item active>{12}</Pagination.Item>
<Pagination.Item>{13}</Pagination.Item>
<Pagination.Item disabled>{14}</Pagination.Item>

<Pagination.Ellipsis />
<Pagination.Item>{20}</Pagination.Item>
<Pagination.Next />
<Pagination.Last />
</Pagination> */
}
