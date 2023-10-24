import propTypes from 'prop-types';

export const SectionTitle = ({ title, children }) => {
    return (
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    );
  };

  SectionTitle.propTypes = {
    title: propTypes.string,
    children: propTypes.element,
  };