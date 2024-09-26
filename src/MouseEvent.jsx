export default function MouseEvent() {
    return (<h1  
            onClick={e=>alert("onClick")}
            onMouseEnter = {e=>alert("onMouseEnter")}
            onMouseOver ={ e=>alert("onMouseOver")}
            onMouseDown ={ e=>alert("onMouseDown")}
            onMouseUp ={ e=>alert("onMouseUp")}
            >Click Me</h1>);
}