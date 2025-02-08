
export const remoteConfig = {
    ENVIRONMENTS: {
        ENABLE_ADS: false,
        ENABLE_ADS_BANNERS: false,
        USER: "",
        PASS: "",
        APP_MAINTENANCE: false,
        IS_TESTING: false,
        URL_TERMS: "",
        URL_APP_ANDROID: "",
        DEFAULT_ADS: ""
    },
    SCREENS: {
       
        FORCE_UPDATE: {
            title: "",
            message: "",
            btnUpdateText: ""
        },
     
        MAINTENANCE: {
            title: "",
            message: "",
            btnText: ""
        }

    },
    OPTIONS_ITEMS: {
        options: [],
        nextFeatures: []
    },
    VARIABLES: {
    
    },
    ADS: {
        android: {
            banner: "",
            interstitial: "",
            rewarded: ""
        },
        ios: {
            banner: "",
            interstitial: "",
            rewarded: ""
        }
    },
 
    FEATURE_FLAGS: {
        FORCE_UPDATE: {
            active: false,
            users: []
        }
    }

}