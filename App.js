{/* <div id ="parent">
    <div id="child">
        <div>I am div1 tag</div>
        <div>I am div2 tag</div>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div> */}
const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("div",{},"I am div1 tag"),
        React.createElement("div",{},"I am div2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
    ]),
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);