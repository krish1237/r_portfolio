import React, { useState } from 'react'
import { ThemeProvider, CssBaseline, makeStyles, Container, Typography } from '@material-ui/core'
import { darkTheme, lightTheme } from '../theme'
import SEO from '../components/seo'
import Header from '../components/header'
import Hello from '../components/hello'

const useStyles = makeStyles((theme) => ({
    container1: {
        padding: `1.5rem`,
        maxWidth: `100%`,
        maxHeight: `100%`
    }
}))

export default function IndexPage(props){
    const [darkMode, toggleDarkMode] = useState(true)

    const classes = useStyles()

    return(
        <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
            <CssBaseline/>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            <SEO title="Home"/>
            <br/>
            <Container className={classes.container1}>
                {/* <Typography
                    component="h1"
                    variant="h1"
                    style={{
                        fontFamily: [`Comfortaa`, `Open Sans`]
                    }}
                    noWrap
                >
                    Hello.<br/>
                    I'm Krish
                </Typography> */}
                <Hello/>
            </Container>
        </ThemeProvider>
    )
}