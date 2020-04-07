import React from 'react';
import styles from './App.scss';
import React from 'react';
import styles from './Column.scss';

class Column extends React.Component {
    static propTypes = {
        titleColumn1:PropTypes.string.isRequired,
        titleColumn2:PropTypes.node.isRequired,
        titleColumn3: PropTypes.node.isRequired,
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.titleColumn1}{this.props.titleColumn2}{this.props.titleColumn3}</h3>
      </section>
    )
  }
}

export default Column;