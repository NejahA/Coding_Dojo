import { useState } from 'react';
import './App.css';
import DisplayTabs from './DisplayTabs';


function App() {
  
  const contentArr = [{'header':'header1', 'content':"content1"},
  {'header':'header2', 'content':"content2"},
  {'header':'header3', 'content':"content3"}]
  return (
    <div className="App">
      <DisplayTabs arr= {contentArr} />
    </div>
  );
}

export default App;
