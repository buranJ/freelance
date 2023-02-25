



// eslint-disable-next-line no-undef
const detectDarkMode = () => {
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        return 'dark'
    }
    return 'light'
};

export default detectDarkMode