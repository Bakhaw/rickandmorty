import React from 'react';
import styled from 'styled-components';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import ReactPaginate from 'react-paginate';

const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
  & .Pagination__container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    li a {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
      color: #eb5286;
      border: none;
      border-radius: 50%;
      font-size: 16px;
      font-weight: bold;
      margin: 10px;
      height: 40px;
      width: 40px;
      box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
        0 5px 15px 0 rgba(0, 0, 0, 0.08);
      transition: 0.3s;
      &:hover {
        background: #eb5286;
        color: #fff;
        transition: 0.3s;
      }
      @media (max-width: 650px) {
        height: 33px;
        width: 33px;
        font-size: 14px;
        margin: 7px;
      }
    }
    .previous,
    .next {
      display: none;
    }
    .Page__button__active {
      a {
        background: #eb5286;
        color: #fff;
      }
    }
  }
`;

function Pagination({ currentPage, handleChangePage, totalPages }) {
  const smallScreen = window.screen.width <= 650;
  const pageRangeDisplayed = smallScreen ? 2 : 6;
  return (
    <PaginationList>
      <ReactPaginate
        activeClassName='Page__button__active'
        breakLabel={<MoreIcon fontSize='small' />}
        containerClassName='Pagination__container'
        forcePage={currentPage - 1}
        marginPagesDisplayed={1}
        onPageChange={e => handleChangePage(e)}
        pageCount={Number(totalPages)}
        pageRangeDisplayed={pageRangeDisplayed}
        subContainerClassName='Pagination__subcontainer'
      />
    </PaginationList>
  );
}

export default Pagination;
