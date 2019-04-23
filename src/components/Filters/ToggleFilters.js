import React from 'react';
import ArrowDownIcon from '@material-ui/icons/ArrowDownward';
import classNames from 'classnames';
import styled from 'styled-components';

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

function ToggleFilters({ handleToggle, show }) {
  const title = show ? 'Hide filters' : 'Show filters';

  return (
    <Button onClick={handleToggle} style={{ margin: 0, width: '100%' }}>
      <Row>
        <span>{title}</span>
        <ArrowDownIcon
          className={classNames('ArrowDown', show && 'ArrowDown__animate')}
        />
      </Row>
    </Button>
  );
}

export default ToggleFilters;
