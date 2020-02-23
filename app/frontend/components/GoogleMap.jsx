import React,{Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
          lat: 35.681236,
          lng: 139.767125
        },
        zoom: 11
      };
    
    render() { 
        return ( 
            <div>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: '' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={35.681236}
                        lng={139.767125}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div>
            </div>
         );
    }
}
 
export default GoogleMap;