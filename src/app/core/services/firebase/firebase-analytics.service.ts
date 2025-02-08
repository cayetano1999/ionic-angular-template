import { Injectable } from '@angular/core';
import { getAnalytics, logEvent } from "firebase/analytics";
@Injectable({
    providedIn: 'root',
})
export class FirebaseAnalyticsService {
    constructor() {
    }

    setCurrentScreen = async (screenName: string) => {
        const analytics = getAnalytics();

        logEvent(analytics, 'screen_view', {
            firebase_screen: screenName,
            firebase_screen_class: screenName
        });
    };

    logEvents = async (event: string, params?: any) => {
        const analytics = getAnalytics();

        logEvent(analytics, event, {
            ...params
        });
    };


}
