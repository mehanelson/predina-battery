/**
 * Created by christoph on 15/02/17.
 */
import React from "react";

class BatteryOutput extends React.Component {
	render() {
		return <div
			style={{padding:10, paddingLeft:50}}
		>
			<h2>Results will go here</h2>
			<pre>{JSON.stringify(this.props.inputs, null, '  ')}</pre>
		</div>
	}
}

export default BatteryOutput;
