import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import Hero from '../Hero/Hero';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <div className={styles.component}>
          <h1 className={styles.title}>My first React app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
        </div>
        <List 
          title={['Things to do ', <sup key='1'>soon!</sup>]} 
          imgSrc={'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}
        />
      </div>
    )
  }
}

export default App;
