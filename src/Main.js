/**
 * Created by christoph on 13/02/17.
 */
import React from "react";
import InputMenu from './InputMenu';
import BatteryOutput from './BatteryOutput';

class Main extends React.Component {

	constructor() {
		super();
		this.state = {
			externalTemperature: 10,
			interiorTemperature: 16,
			weather            : "sunny",
			passengers         : 1,
			roadProfile        : "uphill",
			night              : true,
			driveCycles        : "mix",
		};

		this.headPadding = 10;
	}

	render() {
		return <div style={{
			display      : "flex",
			flexDirection: "row"
		}}>

			<div style={{
				width       : 300,
				paddingRight: 20 // required because the slider labels overextend
			}}>
				<InputMenu
					updateInput={( v ) => this.setState( v )}
					inputs={this.state}/>
			</div>
			<div style={{
				flex: 1,
			}}>
				<BatteryOutput inputs={this.state} />
			</div>
		</div>
	}
}

export default Main;

