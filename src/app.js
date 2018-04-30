
//Defining Where the Component should go in the html page
const appRoot = document.getElementById('app');     


class FirstComponent extends React.Component {
  	render() {
	    return (
            <div className="message">
                {
                    /* 
                        This is rendered to the screen. The portion after "Hello World!" checks whether the 
                        name props is parsed down in the component

                    */
                }  
		        <h1>Hello World! { this.props.name ? this.props.name : '' }</h1>
	      	</div>
	    );
  	}
}


//Using React to Render FirstComponent
ReactDOM.render(<FirstComponent />, appRoot);


//Using React to Render FirstComponent with the name props passed to it.
//ReactDOM.render(<FirstComponent name="Some Name" />, appRoot);
