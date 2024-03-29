import { connect } from 'react-redux';

import Button from 'src/components/Button';

import { onVote } from 'src/store/reducer';

const mapStateToProps = (state, ownProps) => ({
  count: state[ownProps.name],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onVote: () => {
    dispatch(onVote(ownProps.name));
  },
});

const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(Button);

export default ButtonContainer;
