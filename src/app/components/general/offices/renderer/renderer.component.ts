
import {Component, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {latLng, Map, MapOptions, tileLayer, Marker, marker, icon, circle, Layer} from 'leaflet';
import {L} from "@angular/cdk/keycodes";

@Component({
    selector: 'app-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.css'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class RendererComponent implements OnInit {

    private map: Map | any;
    public mapOptions: MapOptions | any;
    public points  = [];
    private layers: Layer[] = [];
    @Input('markerColor')
    markerColor = "red";
    @Input('markerRadius')
    markerRadius = "8";
    @Input('mapZoom')
    mapZoom = 10;
    @Input('mapMaxZoom')
    maxMapZoom = 18;
    @Input('mapCenterLat')
    mapCenterLat = 10;
    @Input('mapCenterLng')
    mapCenterLng = 10;

    constructor(public elementRef: ElementRef)
    {

    }
    onMapReady(map: any) {
        this.map = map;
        this.loadMarkers();
    }
    ngOnInit() {
        this.mapOptions = {
            layers: [
                tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: this.maxMapZoom,
                    attribution: 'Liferay Map'
                })
            ],
            zoom: this.mapZoom,
            center: latLng(this.mapCenterLat, this.mapCenterLng)
        };
    }
    loadMarkers()
    {
        this.getDataByHTMLTag();
        this.createMapMarkers();
    }
    getDataByHTMLTag()
    {
        const htmlImgs = this.elementRef.nativeElement.querySelectorAll("data-element") as Array<any>;

        for (let index = 0 ; index < htmlImgs.length ; index++)
        {
            let dataElement = htmlImgs[index];
            let pointObj = {
                title: dataElement.getAttribute("title")?dataElement.getAttribute("title") : "",
                lat: dataElement.getAttribute("lat")?dataElement.getAttribute("lat") : "",
                lng: dataElement.getAttribute("lng")?dataElement.getAttribute("lng") : ""
            };
            // @ts-ignore
            this.points.push(pointObj);
            dataElement.setAttribute("style","display:none!important");
        }
    }

    createMapMarkers()
    {
        this.points.forEach(point=>{
            // @ts-ignore
            this.addMarker(point.lat,point.lng,point.title);
        })
    }
    private addMarker(latitude: number, longitude: number,title:any): void {
        if (this.map) {
            const markerOptions = {
                radius: parseInt(this.markerRadius),
                color: this.markerColor,
                fillColor: this.markerColor,
                fillOpacity: 1
            };
            let newMarker = circle([latitude, longitude], markerOptions).addTo(this.map);
            newMarker.bindTooltip(title, {
                permanent: true,
                direction: 'top',
                className: 'marker-tooltip' // You can define a CSS class for custom styling
            });

            this.layers.push(newMarker);
        }
        else
        {
            console.log("error while adding")
        }
    }
}
