import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'

class List extends React.Component {
    static propTypes = {
        image:PropTypes.string.isRequired,
        title:PropTypes.node.isRequired,
        children: PropTypes.node,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }
  render() {
    return (
      <section className={styles.component}>      
        <Hero titleText={this.props.title} HeroImage={this.props.image} />
        <div className={styles.description}>
            {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column titleColumn1={'Column no 1'}/>
          <Column titleColumn2={'Column no 2'}/>
          <Column titleColumn3={'Column no 3'}/> 
        </div>
      </section>
    )
  }
}

export default List;
