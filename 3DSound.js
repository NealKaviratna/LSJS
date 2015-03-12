// 3D Sound object
function ThreeDimensionalSound (GPSCoord, soundfile, eventTrigger, loop) {
    this.GPSCoord = GPSCoord;
    this.trigger = eventTrigger;
    this.isPLaying = false;
    this.isLooping = loop;
    
    // Add a listener if a trigger is passed in to start the audio. If no trigger is wanted, null should be passed in for eventTrigger
    this.audio = new Howl({
          urls: [soundfile]
        });
    if (this.trigger) audio.addEventListener(eventTrigger, ThreeDimensionalSound.prototype.play);
    
    // TODO: take the GPSCoordinate data and determine what x/y/z values to use based on current position
    this.audio.pos3d(GPSCoord[0],GPSCoord[1],GPSCoord[2]);
}

ThreeDimensionalSound.prototype.play = function() {
    this.isPLaying = true;
    
    // Loop the audio if looping is enabled. Using this event listener implementation instead of Howler's .loop as there have been reported issues with the latter
    var self = this;
    // if (this.isLooping) {
        // this.audio.on('ended', function() {
            // this.currentTime = 0;
            // this.play();
        // });
    // }
    // else {
        // this.audio.on('ended', function() {
            // this.currentTime = 0;
            // self.isPlaying = false;
        // });
    // }
    this.audio.play();
}

ThreeDimensionalSound.prototype.setLooping = function(loop) {
    this.isLooping = false;
}

// ---------------------------------------------------------------------------------------------- Class Seperator

// A GPS Coordinate location
function GPSCoordinate (latitude, longitude, height) {
    this.latitude = latitude;
    this.longitutde = longitude;
    this.height = height;
}