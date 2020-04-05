import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';


const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}{props.HeroImage}</h2>


        </header>
    );
    Hero.propTypes = {
        titleText: PropTypes.node.isRequired,
        HeroImage: PropTypes.string.isRequired,
      };
  


export default Hero;
