import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className='ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div>
						<div>Search Images</div>
						<div className='ui fluid icon input field'>
							<input
								type='text'
								value={this.state.term}
								onChange={(e) => this.setState({ term: e.target.value })}
								placeholder='Image Search...'
							/>
							<i
								onClick={this.onFormSubmit}
								className='inverted circular search link icon'
							></i>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
