/**
 * Created by christoph on 15/02/17.
 */

import React from "react";
import {Slider, Icon, Switch, Select} from "antd";

class InputMenu extends React.Component {
	constructor() {
		super();
		this.headPadding = 10;
	}

	updateInput = ( name ) =>
		( v ) => {
			const change   = {};
			change[ name ] = v;
			this.props.updateInput( change );
		};

	render() {

		return (
			<div>
				<h2 style={{ paddingTop: this.headPadding }}>Interior Temperature</h2>
				<Slider
					min={15}
					max={30}
					marks={{
						15: '15°C',
						20: '20°C',
						25: '25°C',
						30: '30°C',
					}}
					tipFormatter={v => `${v}°C`}
					included={false}
					onChange={this.updateInput( 'interiorTemperature' )}
					value={this.props.inputs.interiorTemperature}
				/>

				<h2 style={{ paddingTop: this.headPadding }}>Exterior Temperature</h2>
				<Slider
					min={-10}
					max={40}
					marks={{
						'-10': '-10°C',
						0    : '0°C',
						10   : '10°C',
						20   : '20°C',
						30   : '30°C',
						40   : '40°C',
					}}
					tipFormatter={v => `${v}°C`}
					included={false}
					onChange={this.updateInput( 'externalTemperature' )}
					value={this.props.inputs.externalTemperature}
				/>

				<h2 style={{ paddingTop: this.headPadding }}>Passengers</h2>
				<Slider
					min={0}
					max={10}
					marks={{
						0 : '0',
						10: '10'
					}}
					tipFormatter={v => `${v} ${v === 1 ? 'person' : 'people'}`}
					included={false}
					onChange={this.updateInput( 'passengers' )}
					value={this.props.inputs.passengers}
				/>

				<h2 style={{ paddingTop: this.headPadding }}>Night&nbsp;&nbsp;
					<Switch
						checked={this.props.inputs.night}
						checkedChildren={<Icon type="check"/>}
						unCheckedChildren={<Icon type="close"/>}
						onChange={this.updateInput( 'night' )}
					/>
				</h2>

				<h2 style={{ paddingTop: this.headPadding }}>Weather</h2>
				<Select
					value={this.props.inputs.weather}
					onChange={this.updateInput( 'weather' )}
					style={{ width: "100%" }}>
					<Select.Option value="sunny">Sunny</Select.Option>
					<Select.Option value="cloudy">Cloudy</Select.Option>
					<Select.Option value="rainy">Rainy</Select.Option>
					<Select.Option value="snowy">Snowy</Select.Option>
				</Select>

				<h2 style={{ paddingTop: this.headPadding }}>Road Profile</h2>
				<Select
					value={this.props.inputs.roadProfile}
					onChange={this.updateInput( 'roadProfile' )}
					style={{ width: "100%" }}>
					<Select.Option value="uphill">Uphill</Select.Option>
					<Select.Option value="downhill">Downhill</Select.Option>
					<Select.Option value="level">Level</Select.Option>
				</Select>

				<h2 style={{ paddingTop: this.headPadding }}>Drive Cycles</h2>
				<Select
					value={this.props.inputs.driveCycles}
					onChange={this.updateInput( 'driveCycles' )}
					style={{ width: "100%" }}>
					<Select.Option value="city">City Driving</Select.Option>
					<Select.Option value="highway">Highway Driving</Select.Option>
					<Select.Option value="mix">Mixed Driving</Select.Option>
				</Select>
			</div>
		);
	}
}

export default InputMenu;