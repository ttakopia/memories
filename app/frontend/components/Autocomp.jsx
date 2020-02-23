import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.trip.bhotel
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }
  
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Autocomplete
              options={Actionindex}
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
                  onChange={this.handleTitleChange}
                  fullWidth />
              )}
          />
        </div>
        <div>
          <Autocomplete
              options={Actionindex}
              // フォームのValue表示
              getOptionLabel={option => option.price}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField 
                  {...params} 
                  label="交通費の予算" 
                  variant="outlined"
                  type="text"
                  // モデル名：trip　カラム名：[triptitle]
                  name="trip[bflight]"
                  //　値:value
                  value={this.state.bflight}
                  onChange={this.handleTitleChange}
                  fullWidth />
              )}
          />
        </div>
        <div>
          <Autocomplete
              options={Actionindex}
              // フォームのValue表示
              getOptionLabel={option => option.price}
              style={{ width: 300 }}
              renderInput={params => (
                <TextField 
                  {...params} 
                  label="食事の予算" 
                  variant="outlined"
                  type="text"
                  // モデル名：trip　カラム名：[triptitle]
                  name="trip[bfood]"
                  //　値:value
                  value={this.state.bfood}
                  onChange={this.handleTitleChange}
                  fullWidth />
              )}
          />
        </div>
      </React.Fragment>
    );
  }
}

const Actionindex = [
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