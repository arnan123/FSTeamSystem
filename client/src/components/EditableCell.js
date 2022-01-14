import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  EditableInput,
  Editable,
  EditablePreview,
} from '@chakra-ui/react';

function EditableCell(props) {
  if (props.indicator == true) {
    return (
      <>
        <Editable placeholder={props.tablecontent}>
          <EditableInput w={'3vw'} />
          <EditablePreview />
        </Editable>
      </>
    );
  } else {
    return (
      <>
        <Text>{props.tablecontent}</Text>
      </>
    );
  }
}

EditableCell.propTypes = {
  indicator: PropTypes.any,
  tablecontent: PropTypes.any,
};

export default EditableCell;
