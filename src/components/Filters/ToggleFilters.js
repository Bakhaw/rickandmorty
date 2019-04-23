import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import ClearIcon from '@material-ui/icons/ClearRounded';

import Button from '../../components/Button';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ArrowDown {
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    &__animate {
      transform: rotate(180deg);
    }
  }
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0px;
  border-radius: 3px;
  background: rgba(78, 87, 239, 0.4);
  margin-left: 8px;
  padding: 2px 8px;
  text-transform: uppercase;
  p {
    font-size: 12px;
    margin: 0 5px;
  }
  svg {
  }
`;

function ToggleFilters({
  activeFilter,
  handleResetFilters,
  handleToggle,
  show
}) {
  const title = show ? 'Hide filters' : 'Show filters';

  return (
    <Button
      onClick={handleToggle}
      style={{ margin: 0, padding: '6px 10px', width: '100%' }}
    >
      <Row>
        <Row>
          <span>{title}</span>{' '}
          {activeFilter && (
            <Chip>
              <p>{activeFilter}</p>
              <ClearIcon fontSize='small' onClick={handleResetFilters} />
            </Chip>
          )}
        </Row>
        <ArrowDownIcon
          className={classNames('ArrowDown', show && 'ArrowDown__animate')}
        />
      </Row>
    </Button>
  );
}

export default ToggleFilters;
