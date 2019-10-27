import rand from "utils/rand";

export default class RandomNumber extends React.Component {
	static propTypes = {
		min: PropTypes.number.isRequired,
		max: PropTypes.number.isRequired
	};

	static defaultProps = {
		min: 0,
		max: 100
	};

	constructor(props) {
		super(props);
		this.state = {
			number: rand(this.props.min, this.props.max)
		};
	}

	render() {
		return (
			<div>{this.state.number}</div>
		);
	}
}