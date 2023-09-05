


export const Themes = {
    light: {
        textColor: 'white',
    },
    dark: {
        textColor: 'red',
    },

    current: (scheme: string) => {
        return scheme === 'dark' ? Themes.dark : Themes.light;
    }
}