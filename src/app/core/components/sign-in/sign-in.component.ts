import { Component, OnInit } from "@angular/core";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";
import { registerElement } from "@nativescript/angular/element-registry";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";

registerElement("MapView", () => MapView);

@Component({
    selector: "sign-in",
    templateUrl: "./sign-in.component.html"
})
export class SignInComponent {
    latitude = 33.6844;
    longitude = 73.0479;
    zoom = 20;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;
    finalLatitude = 0; finalLongitude = 0;

    constructor() {
        this.getCurrentLocation();
    }

    onMapReady(event) {
        this.mapView = event.object;
        const marker = new Marker();
        marker.position = Position.positionFromLatLng(this.latitude, this.longitude);
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    onCameraMove(args) {
        const marker = new Marker();
        marker.position = Position.positionFromLatLng(args.camera.latitude, args.camera.longitude);
        this.finalLatitude = args.camera.latitude;
        this.finalLongitude = args.camera.longitude;
        marker.userData = {index: 1};
        this.mapView.clear();
        this.mapView.addMarker(marker);
    }

    show() {
        alert(this.finalLatitude + "......." + this.finalLongitude);
    }

    private getCurrentLocation() {
        geolocation.getCurrentLocation({
            desiredAccuracy: Accuracy.high,
            maximumAge: 5000,
            timeout: 10000
        }).then((loc) => {
            if (loc) {
                this.latitude = loc.latitude;
                this.longitude = loc.longitude;
                this.finalLatitude = loc.latitude;
                this.finalLongitude = loc.longitude;
            }
        }, (e) => {
            console.log("Error: " + (e.message || e));
        });
    }
}
