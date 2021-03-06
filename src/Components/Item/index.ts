/* Components/SettingsMenu/Device/index.ts */

/* React/Redux/Other */
import { connect }                                    from 'react-redux';

/* Material-UI */
import withStyles                                     from '@material-ui/core/styles/withStyles';

/* This Project */
import * as Models                                    from 'src/Models'; 
import { setCurrentUserFlats }                        from 'src/Redux/Actions/userActions';

/* This Component */
import Item                                           from './Item';
import { itemClasses }                                from './Styles';

const mapStateToProps = (state: Models.StateType) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { setCurrentUserFlats })(withStyles(itemClasses, {withTheme: true})(Item));