import { createMuiTheme } from "@material-ui/core"

export const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        background: {
            default: '#0f0f0f'
        }
    }
})

export const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        background: {
            default: '#fcfcfc'
        }
    }
})