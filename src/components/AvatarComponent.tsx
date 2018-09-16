import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types'
import * as React from 'react';

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        height: 60,
        width: 60,
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
};

function ImageAvatars(props: any) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" className={classes.avatar} />
      <Avatar
        alt="Adelle Charles"
        src="/static/images/uxceo-128.jpg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
