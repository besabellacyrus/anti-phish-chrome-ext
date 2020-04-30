import React, { useState, useEffect } from "react";
import { banks } from './banks';

const App = () => {
  // const [state, setState] = useState({ message: "Nice!" });
  const [url, setUrl] = useState("");
  useEffect(() => {
    // const listener = message => setState(message);
    // chrome.runtime.onMessage.addListener(listener);
    // return () => {
    //   chrome.runtime.onMessage.removeListener(listener);
    // }
    showTabUrl();
  }, []);

  const showTabUrl = () => {
    setUrl('weee');
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url
        const sliced = url.split('/');
        setUrl(sliced);
        // setUrl(tabs[0].url);
    });
  }
  return <h1>{ url }</h1>
}

export default App;