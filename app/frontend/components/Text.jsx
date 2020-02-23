import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.trip.triptitle,
      content: props.trip.place
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }
  
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }

  render() {
    return (
      <div>
        <label>タイトル</label>
        <input
          type="text"
          // モデル名：trip　カラム名：[triptitle]
          name="trip[triptitle]"
          //　値:value
          value={this.state.triptitle}
          onChange={this.handleTitleChange}
        />
      </div>
    );
  }
}

export default PostForm