import "./App.css";

const ameyoBaseUrl = "https://app3.ameyoemerge.in:8443/";

function App() {
  console.log(window.location.href);
  return (
    <div id="ameyoIframeDiv">
      <iframe
        height="400px"
        width="200px"
        id="ameyoIframe"
        src={`${ameyoBaseUrl}ameyowebaccess/toolbar-crm.htm?origin=${window.location.href}`}
      ></iframe>
    </div>
  );
}

export default App;
