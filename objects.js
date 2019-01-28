//A MACBOOK PRO OBJECT


const macBookPro = {
    touch_bar: 'Touch Bar with integrated Touch ID sensor',

    finish: {
        type_one: 'silver',
        type_two: 'space grey'
    },

    display: 'retina display',
    processor: {
        type_one: '2.2GHz 6-core Intel Core i7, Turbo Boost up to 4.1GHz, with 9MB shared L3 cache',
        type_two: '2.6GHz 6-core Intel Core i7, Turbo Boost up to 4.3GHz, with 9MB shared L3 cache'
    },

    storage: {
        type_one: '256GB SSD',
        type_two: '512GB SSD'
    },

    memory: '16GB of 2400MHz DDR4 onboard memory',
    graphics: {
        type_one: 'Radeon Pro 555X with 4GB of GDDR5 memory and automatic graphics switching Intel UHD Graphics 630',
        type_two: 'Radeon Pro 560X with 4GB of GDDR5 memory and automatic graphics switching Intel UHD Graphics 630'
    },

    charging_and_expansion: {
        Four_Thunderbolt_3_USB_C_port: {
            supports: [
                'Charging',
                'DisplayPort',
                'Thunderbolt(up to 40 Gbps)',
                'USB 3.1 Gen 2 (up to 10 Gbps)'
            ]
        }
    },

    keyboard_and_trackpad: {
        full_size_backlit_keyboard: {
            features: [
                '64 (U.S.) or 65 (ISO) keys including 4 arrow keys',
                'Touch Bar with integrated Touch ID sensor',
                'Ambient light sensor'
            ]
        }
    },

    wireless: {
        wifi: '802.11ac Wi-Fi wireless networking; IEEE 802.11a/b/g/n compatible',
        bluetooth: 'Bluetooth 5.0 wireless technology'
    },

    camera: '720p FaceTime HD camera',

    video_support: [
        'Simultaneously supports full native resolution on the built-in display at millions of colors',
        'Thunderbolt 3 digital video output'],

    audio: {
        features: [
            'Stereo speakers with high dynamic range',
            'Three microphones',
            '3.5 mm headphone jack'
        ]
    },

    battery_and_power: {
        features: [
            'Up to 10 hours wireless web',
            'Up to 10 hours iTunes movie playback',
            'Up to 30 days of standby time',
            'Built-in 83.6-watt-hour lithium-polymer battery',
            '87W USB-C Power Adapter'
        ]
    },

    operating_requirements: {
        Line_voltage: '100V to 240V AC',
        Frequency: '50Hz to 60Hz',
        Operating_temperature: '10° to 35° C (50° to 95° F)',
        Storage_temperature: '–25° to 45° C (–13° to 113° F)',
        Relative_humidity: '0% to 90% noncondensing',
        Operating_altitude: 'tested up to 3,000 meters (10,000 feet)',
        Maximum_storage_altitude: '4,500 meters (15,000 feet)',
        Maximum_shipping_altitude: '10,500 meters (35,000 feet)'
    },

    size_and_weight: {
        Height: '1.55 cm (0.61 inch)',
        Width: '34.93 cm (13.75 inches)',
        Depth: '24.07 cm (9.48 inches)',
        Weight: '1.83 kg (4.02 pounds)'
    },

    operating_system: 'macOS',

    accessibility: {
        features: [
            'VoiceOver',
            'Zoom',
            'Increase Contrast',
            'Reduce Motion',
            'Dictation',
            'Switch Control',
            'Closed Captions',
            'Text to Speech'
        ]
    },

    built_in_apps: [

        'Photos',
        'iMovie',
        'GarageBand',
        'Pages',
        'Numbers',
        'Keynote',
        'Siri',
        'Safari',
        'Mail',
        'FaceTime',
        'Messages',
        'Maps',
        'Stocks',
        'Home',
        'Voice Memos',
        'Notes',
        'Calendar',
        'Contacts',
        'Reminders',
        'Photo Booth',
        'Preview',
        'iTunes',
        'Books',
        'App Store',
        'Time Machine'
    ],

    what_is_in_the_mackbook_package: [
        '15-inch MacBook Pro',
        '87W USB-C Power Adapter',
        'USB-C Charge Cable (2 m)'
    ],

    warranty: 'Your MacBook Pro comes with 90 days of free telephone technical support and a one-year limited warranty'
};

console.log(macBookPro);