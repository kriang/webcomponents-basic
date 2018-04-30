
//Defining Where the Component should go in the html page
const appRoot = document.getElementById('app');     


class FirstComponent extends React.Component {
  	render() {
	    return (
            <div className="message">
                {
                    /* 
                        This is rendered to the screen. The portion after "Hello World!" checks whether the 
                        greeting props is parsed down in the component and if yes, display the prop otherwise
                        display nothing

                    */
                }  
		        <h1>Hello World! { this.props.greeting ? this.props.greeting : '' }</h1>
	      	</div>
	    );
  	}
}


//Using React to Render FirstComponent
ReactDOM.render(<FirstComponent />, appRoot);


//Using React to Render FirstComponent with the name props passed to it.
//ReactDOM.render(<FirstComponent greeting="Name" />, appRoot);
