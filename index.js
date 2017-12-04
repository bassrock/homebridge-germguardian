var Service, Characteristic;
var devices = [];

module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    Accessory = homebridge.hap.Accessory;
    uuid = homebridge.hap.uuid;


    var acc = GermGuardianAirPurifierAccessory.prototype;
    inherits(GermGuardianAirPurifierAccessory, Accessory);
    GermGuardianAirPurifierAccessory.prototype.parent = Accessory.prototype;
    for (var mn in acc) {
        GermGuardianAirPurifierAccessory.prototype[mn] = acc[mn];
    }

    homebridge.registerPlatform("homebridge-germguardian", "GermGuardian", GermGuardianPlatform);
};


function GermGuardianPlatform(log, config) {
    // auth info
    this.username = config["username"];
    this.password = config["password"];
    this.config = config;

    this.log = log;
    this.accessoryLookup = {};
    this.accessoryLookupByStructureId = {};
}


GermGuardianPlatform.prototype = {
    accessories: function (callback) {
        this.log("Fetching Germ Guardian devices.");

        var that = this;

        var generateAccessories = function(data) {
            var foundAccessories = [];

            var loadDevices = function(DeviceType) {
                var list = data.devices && data.devices[DeviceType.deviceGroup];
                for (var deviceId in list) {
                    if (list.hasOwnProperty(deviceId)) {
                        var device = list[deviceId];
                        var structureId = device['structure_id'];
                        var structure = data.structures[structureId];
                        var accessory = new DeviceType(this.conn, this.log, device, structure);
                        that.accessoryLookup[deviceId] = accessory;
                        foundAccessories.push(accessory);
                    }
                }
            }.bind(this);

            loadDevices(GermGuardianAirPurifierAccessory);

            return foundAccessories;
        }.bind(this);

        var updateAccessories = function(data, accList) {
            accList.map(function(acc) {
                var device = data.devices[acc.deviceGroup][acc.deviceId];
                var structureId = device['structure_id'];
                var structure = data.structures[structureId];
                acc.updateData(device, structure);
            }.bind(this));
        };

        var handleUpdates = function(data){
            updateAccessories(data, that.accessoryLookup);
        };
        setupConnection(this.config, this.log)
            .then(function(conn){
                that.conn = conn;
                return that.conn.open();
            })
            .then(function(){
                return that.conn.subscribe(handleUpdates);
            })
            .then(function(data) {
                that.accessoryLookup = generateAccessories(data);
                if (callback) {
                    var copy = that.accessoryLookup.map(function (a) { return a; });
                    callback(copy);
                }
            })
            .catch(function(err) {
                that.log.error(err);
                callback([]);
            });
    }
};





function GermGuardianAirPurifierAccessory(log) {
    this.log = log;
    this.name = config.name || 'Air Purifier';
    this.showAirQuality = config.showAirQuality || false;

    this.services = [];


    // Modes supported
    this.modes = [
        [0, '1'], [60, '2'], [80, '3'], [100, '4'], [100, '5'], [100, 'Auto']
    ];

    // Register the service
    this.service = new Service.AirPurifier(this.name);

    this.service
        .getCharacteristic(Characteristic.Active)
        .on('get', this.getActive.bind(this))
        .on('set', this.setActive.bind(this));

    this.service
        .getCharacteristic(Characteristic.CurrentAirPurifierState)
        .on('get', this.getCurrentAirPurifierState.bind(this));

    this.service
        .getCharacteristic(Characteristic.TargetAirPurifierState)
        .on('get', this.getTargetAirPurifierState.bind(this))
        .on('set', this.setTargetAirPurifierState.bind(this));

    this.service
        .getCharacteristic(Characteristic.LockPhysicalControls)
        .on('get', this.getLockPhysicalControls.bind(this))
        .on('set', this.setLockPhysicalControls.bind(this));

    this.service
        .getCharacteristic(Characteristic.RotationSpeed)
        .on('get', this.getRotationSpeed.bind(this))
        .on('set', this.setRotationSpeed.bind(this));

    // Service information
    this.serviceInfo = new Service.AccessoryInformation();

    this.serviceInfo
        .setCharacteristic(Characteristic.Manufacturer, 'Germ Guardian')
        .setCharacteristic(Characteristic.Model, 'Air Purifier')
        .setCharacteristic(Characteristic.SerialNumber, 'PUT ME HERE');

    this.services.push(this.service);
    this.services.push(this.serviceInfo);

    this.airQualitySensorService = new Service.AirQualitySensor('Air Quality');

    this.airQualitySensorService
        .getCharacteristic(Characteristic.AirQuality)
        .on('get', this.getAirQuality.bind(this));

    this.services.push(this.airQualitySensorService);

    this.login();
}

GermGuardianAirPurifierAcessory.prototype = {
    login: function(){

    },

    getActive: function(callback) {

    },

    setActive: function(state, callback) {

    },

    getCurrentAirPurifierState: function(callback) {

    },

    getTargetAirPurifierState: function(callback) {

    },

    setTargetAirPurifierState: function(state, callback) {

    },

    getLockPhysicalControls: function(callback) {

    },

    setLockPhysicalControls: function(state, callback) {

    },

    getRotationSpeed: function(callback) {

    },

    setRotationSpeed: function(speed, callback) {

    },

    getAirQuality: function(callback) {
        var levels = [
            [200, Characteristic.AirQuality.POOR],
            [150, Characteristic.AirQuality.INFERIOR],
            [100, Characteristic.AirQuality.FAIR],
            [50, Characteristic.AirQuality.GOOD],
            [0, Characteristic.AirQuality.EXCELLENT],
        ];
    },

    identify: function(callback) {
        callback();
    },

    getServices: function() {
        return this.services;
    }
};