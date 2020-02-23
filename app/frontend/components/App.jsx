import React, { Component } from 'react';
import axios from 'axios';

const GEOCODE_ENDPOINT = https://travelpartner.googleapis.com/v3/accounts/12345678/hotelviews;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: '通天閣', //ここに好きな場所を指定。
    };
  }
  handleGetLatAndLng() {
    // Google Maps APIが指定した必須パラメータ(この場合はaddress)をparamsに渡す。
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: this.state.place } })
      .then((results) => {
      // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
        const data = results.data;
        const result = data.results[0];
        const location = result.geometry.location;
        this.setState({
          address: result.formatted_address,
          lat: location.lat,
          lng: location.lng,
        });
      },
      )
      .catch(() => {
        console.log('通信に失敗しました。');
      });
  }

  render() {
    return (
      <div className="app">
        <h1 className="app-title">緯度軽度検索</h1>
        <p> 土地名: {this.state.place} </p>
        <p> 経度: {this.state.lat}</p>
        <p> 経度: {this.state.lng}</p>
        <input
          type="button"
          value="経度・緯度を検索"
          onClick={() => this.handleGetLatAndLng()}
        />
      </div>
    );
  }
}

export default App;