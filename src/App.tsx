import React from 'react';
import { Button, DatePicker, version } from 'antd';
import './styles/css/antd.css';
import './App.css';

const App = () => (
  <div className="App">
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>
);

export default App;
