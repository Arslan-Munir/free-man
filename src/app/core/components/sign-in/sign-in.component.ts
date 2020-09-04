import { Component } from "@angular/core";
import { MapView, Marker, Position } from "nativescript-google-maps-sdk";
import { registerElement } from "@nativescript/angular/element-registry";

registerElement("MapView", () => MapView);
@Component({
    selector: "sign-in",
    templateUrl: "./sign-in.component.html"
})
export class SignInComponent {
    latitude =  0;
    longitude = 0;
    zoom = 8;
    minZoom = 0;
    maxZoom = 22;
    bearing = 0;
    tilt = 0;
    padding = [40, 40, 40, 40];
    mapView: MapView;

    lastCamera: string;

    constructor() {
        this.latitude =  33.6844;
        this.longitude = 73.0479;
    }

    // Map events
    onMapReady(event) {
        console.log("Map Ready");

        this.mapView = event.object;

        console.log("Setting a marker...");

        const marker = new Marker();
        marker.position = Position.positionFromLatLng(-33.86, 151.20);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = {index: 1};
        this.mapView.addMarker(marker);
    }

    onCoordinateTapped(args) {
        console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    }

    onMarkerEvent(args) {
        console.log("Marker Event: '" + args.eventName
            + "' triggered on: " + args.marker.title
            + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    }

    onCameraChanged(args) {
        console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
        this.lastCamera = JSON.stringify(args.camera);

    }

    onCameraMove(args) {
        console.log("Camera moving: " + JSON.stringify(args.camera));
        const marker = new Marker();
        marker.position = Position.positionFromLatLng(args.camera.latitude, args.camera.longitude);
        marker.title = "Sydney";
        marker.snippet = "Australia";
        marker.userData = {index: 1};
        this.mapView.clear();
        this.mapView.addMarker(marker);
    }
}
