// 3D Sound object
function ThreeDimensionalSound (GPSCoord, soundfile, eventTrigger, loop) {
    this.GPSCoord = GPSCoord;
    this.trigger = trigger;
    this.isPLaying = false;
    this.isLooping = loop;
    
    // Add a listener if a trigger is passed in to start the audio. If no trigger is wanted, null should be passed in for eventTrigger
    this.audio = new Audio(soundfile);
    if (eventTrigger) audio.addEventListener(eventTrigger, ThreeDimensionalSound.prototype.play);
    
    // TODO: take the GPSCoordinate data and determine what x/y/z values to use based on current position
    // this.audio.pos3d(x,y,z);
}

ThreeDimensionalSound.prototype.play = function() {
    this.isPLaying = true;
    
    // Loop the audio if looping is enabled. Using this event listener implementation instead of Howler's .loop as there have been reported issues with the latter
    var self = this;
    if (this.isLooping) {
        this.audio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    else {
        this.audio.addEventListener('ended', function() {
            this.currentTime = 0;
            self.isPlaying = false;
        }, false);
    }
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