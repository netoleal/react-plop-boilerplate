import React from 'react';
import PropTypes from 'prop-types';
import './contact.scss';
import { useTranslation } from 'react-i18next';

export default function Contact ( props ) {
const { t } = useTranslation( );

return (
<div className="contact">
  Contact Page!
</div>
);
};

Contact.defaultProps = {

};

Contact.propTypes = {

};