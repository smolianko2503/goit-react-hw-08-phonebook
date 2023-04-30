import { Title } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
