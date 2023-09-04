import { I18nManager } from "react-native";
import { I18n } from 'i18n-js';


const StringsOfLanguages = new I18n({    
    en: {
        direction: 'ltr',
        home: 'Home',
        'Go to Detail': 'Go to Detail',
        Detail: 'Detail',
        Login: 'Login',
        Registration: 'Registration',
    },
    he: {
        direction: 'rtl',
        home: 'בית',
        'Go to Detail': 'למסך פרטים',
        Detail: 'פרטים',
        Login: 'כניסה למערכת',
        Registration: 'הרשמה',
    },
});

export default StringsOfLanguages;

// let webRTL = false;

export function setLanguage(tag: string, isRTL: boolean) {
    I18nManager.allowRTL(isRTL);
    I18nManager.forceRTL(isRTL);
    // webRTL = isRTL;
    StringsOfLanguages.locale = tag;
    console.log(`language set to ${tag}`);
}

// export function isRTL()
// {
//     return I18nManager.isRTL || webRTL;
// }