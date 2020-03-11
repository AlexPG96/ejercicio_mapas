//const mymap = L.map('mapid').setView([51.505, -0.09], 13);

const coordenadasMadrid = L.latLng(40.4165001, -3.7025599)
const coordenadasTheBridge = L.latLng(40.4215102, -3.6927541)
const coordenadasNeoland = L.latLng(40.422273, -3.714085)
const coordenadasIronHack = L.latLng(40.392627, -3.698276)
const coordenadasUpgradeHub = L.latLng(40.458860, -3.694706)
const coordenadasAdalab = L.latLng(40.413334, -3.718114)
const coordenadasKeepCoding = L.latLng(40.404162, -3.689889)

const zoom = 16

const map = L.map('map')
map.setView(coordenadasMadrid, zoom)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const theBridgeMarker = L.marker(coordenadasTheBridge).addTo(map).bindPopup('Esto es The Bridge')

const neolandMarker = L.marker(coordenadasNeoland).addTo(map).bindPopup('Esto es Neoland')

const ironHackMarker = L.marker(coordenadasIronHack).addTo(map).bindPopup('Esto es Iron Hack')

const upgradeHubMarker = L.marker(coordenadasUpgradeHub).addTo(map).bindPopup('Esto es Upgrade Hub')

const adalabMarker = L.marker(coordenadasAdalab).addTo(map).bindPopup('Esto es Adalab')

const keepCodingMarker = L.marker(coordenadasKeepCoding).addTo(map).bindPopup('Esto es Keep Coding')

const infection1 = L.circle(coordenadasTheBridge, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const infection2 = L.circle(coordenadasNeoland, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const infection3 = L.circle(coordenadasIronHack, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const infection4 = L.circle(coordenadasUpgradeHub, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const infection5 = L.circle(coordenadasAdalab, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const infection6 = L.circle(coordenadasKeepCoding, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map)

const poliginoInfectionPlus = L.polygon([
    coordenadasTheBridge,
    coordenadasUpgradeHub,
    coordenadasNeoland,
    coordenadasAdalab,
    coordenadasIronHack,
    coordenadasKeepCoding,
]).addTo(map)