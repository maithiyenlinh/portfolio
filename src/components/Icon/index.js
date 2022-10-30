
import * as MdIcons from 'react-icons/md';
import PropTypes from 'prop-types';

const DynamicIcon = ({ name, style }) => {
  const type = name.slice(0, 2);
  let IconComponent = '';
  switch (type) {
  case 'Md':
    IconComponent = MdIcons[name];
    break;
  }
  if (!IconComponent) return <></>;
  return <IconComponent className={`inline text-primary-white ${style}`} />;
};

DynamicIcon.propTypes = {
  name: PropTypes.string,
  style: PropTypes.string,
};

export default DynamicIcon;