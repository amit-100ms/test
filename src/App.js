import logo from './logo.svg';
import './App.css';
import { createRef } from "react";




function App() {

  const p = createRef();

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const getResult = async () => {
    await timeout(3000);
    if (5 > 3) {
      throw new Error("HI");
    }
    return "HI";
  }

  const getRemoteMedia = async () => {
    alert("STARTED");
    const a6 = 5;
    try {
      await new Promise(async (resolve, reject) => {

        const p2 = async (e) => {
          alert(a6);

          try {
            const result = await getResult();
            alert(result);
          } catch (error) {
            console.error('Error in subscribing - (timeout)' + error);
            reject(error);
          }
        };
        document.addEventListener('click', p2, false);

      });
    } catch (error) {
      console.error('Error in onicecandidate - (timeout2):' + error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          onClick={getRemoteMedia}
          ref={p}
        >
          Learn React
        </div>
      </header>
    </div>
  );
}

export default App;
