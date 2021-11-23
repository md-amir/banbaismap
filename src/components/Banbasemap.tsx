import React from 'react'
import { bd } from './../data/bd'
import { bd1 } from './../data/bd1'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import myData from './../data/countries.json'

const Banbasemap = () => {
    console.log(bd)

    return (
        <div className="map-container">
            <MapContainer
                center={[23.823777, 90.429576]}
                zoom={18}
                scrollWheelZoom={true}>
                <GeoJSON data={bd1} />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://localhost:8080/tile/{z}/{x}/{y}.png" />
                {/* <Marker position={[23.823777, 90.429576]}>
                    <Popup>
                        <p>Ethics Advance Technology Limited</p>
                        <img src="/images/eatl.jpg" width="220" height="120" />
                        <p>এথিক্স অ্যাডভান্স টেকনোলজি লিমিটেড</p>
                        <p>Rupayan Shopping Square (Level 5), Plot-2, Dhaka 1229</p>
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    )
}

export default Banbasemap
