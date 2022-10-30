import DynamicIcon from '../Icon';
import PropTypes from 'prop-types';

const DEFAULF_CONTAINER = 'p-1 rounded-xl bg-gradient-to-r from-primary-blue to-primary-purple shadow-default'

const DEFAULT_STYLE = 'block text-primary-white px-4 py-2 font-semibold rounded-xl bg-black-background hover:bg-transparent transition text-semilarge'

const Button = ({ styleContainer, classNames, children }) => {
  return (
    <button className={`${DEFAULF_CONTAINER} ${styleContainer}`}>
      <span className={`${DEFAULT_STYLE} ${classNames}`}>
        {children}
      </span>
    </button>
  )
}

Button.propTypes = {
  styleContainer: PropTypes.string,
  classNames: PropTypes.string,
  children: PropTypes.array,
}

export default Button;