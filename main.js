const element = React.createElement('h1',null, 'Hello World!');
const myButton = React.createElement('button', null, 'Click Me');

function tick(){
	const time = (
		React.createElement('h2',null, 'It is ' + new Date().toLocaleTimeString())
	) 	
	ReactDOM.render(time, document.getElementById('time'));
}
ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(myButton, document.getElementById('app'));
setInterval(tick,1000);