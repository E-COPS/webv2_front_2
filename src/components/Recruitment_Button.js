import PropTypes from 'prop-types';
import styles from './Recruitment_Button.module.css';
import {Link} from 'react-router-dom';

function Button({text}) {
  return(
    <button className={styles.btn}>
      <a href="https://ewhaecops.notion.site/E-COPS-12th-Recruiting-81f6ece018cd49b68eaa1997996213a8">{text}</a>
      {/* <Link to={{pathname: 'https://ewhaecops.notion.site/E-COPS-12th-Recruiting-81f6ece018cd49b68eaa1997996213a8'}} target="_blank">{text}</Link> */}
    </button>
  );
}

//prop-types
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;