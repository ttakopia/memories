import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: props.trip.bhotel
    };
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
  }
  
  handleBudgetChange(e) {
    this.setState({ budget: e.target.value });
  }

  render() {
    return (
        <Autocomplete
            options={Pricelist}
            // フォームのValue表示
            getOptionLabel={option => option.price}
            style={{ width: 300 }}
            renderInput={params => (
            <TextField 
                {...params} 
                label="ホテルの予算" 
                variant="outlined"
                type="text"
                // モデル名：trip　カラム名：[triptitle]
                name="trip[bhotel]"
                //　値:value
                value={this.state.bhotel}
                onChange={this.handleBudgetChange}
                fullWidth />
            )}
        />
    );
  }
}

const Pricelist = [
  { price: '10,000円'},
  { price: '20,000円' },
  { price: '30,000円'},
  { price: '40,000円' },
  { price: '50,000円'},
  { price: '60,000円' },
  { price: '70,000円'},
  { price: '80,000円' },
  { price: '90,000円'},
  { price: '100,000円' }
];

export default PostForm