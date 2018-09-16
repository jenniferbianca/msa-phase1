import Avatar from '@material-ui/core/Avatar';
import deepPurple from '@material-ui/core/colors/deepPurple';
import { withStyles } from '@material-ui/core/styles';
import * as PropTypes from 'prop-types'
import * as React from 'react';

interface IProps {
  classes: any
}

const styles = {
    avatar: {
      margin: 10,
    },
    purpleAvatar: {
      backgroundColor: deepPurple[500],
      color: '#fff',
      margin: 10,
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
    },
  };

const LetterAvatars: React.StatelessComponent<IProps> = ({ classes }) => (
    <div className={classes.row}>
      <Avatar className={classes.purpleAvatar}>MSA</Avatar>
    </div>
);

LetterAvatars.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(LetterAvatars);
