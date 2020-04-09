import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


const Hero = props => (
    <header className={styles.component}>
        {/* <h2 className={styles.title}>{props.titleText} </h2> */}
        <h2 className={styles.title}>{ReactHtmlParser(props.titleText)}</h2>
        <img src={props.HeroImage} className={styles.image}></img>/>
    </header>
    );
    Hero.propTypes = {
        titleText: PropTypes.node.isRequired,
        HeroImage: PropTypes.string.isRequired,
      };
  


export default Hero;
