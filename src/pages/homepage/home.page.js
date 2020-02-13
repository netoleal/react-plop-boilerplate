import React from 'react';
import PropTypes from 'prop-types';
import './home.page.scss';
import { useTranslation } from 'react-i18next';

export default function HomePage ( props ) {
const { t } = useTranslation( );

return (
<div className="homePage">
  Home page Page!
</div>
);
};

HomePage.defaultProps = {

};

HomePage.propTypes = {

};