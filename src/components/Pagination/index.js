import React from 'react';
import styled from 'styled-components';

const PaginationList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
`;

const PaginationButton = styled.button`
  cursor: pointer;
  background: #fff;
  color: #eb5286;
  border: none;
  border-radius: 50%;
  font-size: 14px;
  font-weight: bold;
  margin: 5px;
  height: 35px;
  width: 35px;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),
    0 5px 15px 0 rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  &:hover {
    background: #eb5286;
    color: #fff;
    transition: 0.3s;
  }
  ${({ isActive }) =>
    isActive &&
    `
    background: #eb5286;
    color: #fff;
  `}
`;

function Pagination({ currentPage, handleChangePage, totalPages }) {
  return (
    <PaginationList>
      {Array(totalPages)
        .fill()
        .map((page, index) => {
          const isActive = currentPage === index + 1;
          return (
            <li key={index}>
              <PaginationButton
                isActive={isActive}
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            </li>
          );
        })}
    </PaginationList>
  );
}

export default Pagination;
