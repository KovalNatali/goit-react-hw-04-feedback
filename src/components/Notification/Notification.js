import propTypes from 'prop-types';

export const Notification = ({message}) => {

    return <p className="messege">{message}</p>
}

Notification.propTypes = {
    message: propTypes.string,
  };
