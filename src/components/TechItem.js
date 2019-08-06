import React from 'react';
import PropTypes from 'prop-types';

function TechItem(props) {
  return (
    <li>
      {props.item}
      <button onClick={props.fnDelete} type="button">
        Remover
      </button>
    </li>
  );
}

// conceito de Default Props em function
TechItem.defaultProps = {
  item: 'Não informado',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  fnDelete: PropTypes.func.isRequired,
};

export default TechItem;
