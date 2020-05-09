import React, { useState } from 'react'
import { ThemeProvider, CssBaseline, makeStyles, Slide } from '@material-ui/core'
import { darkTheme, lightTheme } from '../theme'
import SEO from '../components/seo'
import Header from '../components/header'
import Hello from '../components/hello'
import About from '../components/about'

const useStyles = makeStyles((theme) => ({
    infoContainer: {
        position: `relative`,
        minHeight: `100vh`,
        overflow: `hidden`,
        padding: `1.5rem`,
    },
}))

export default function IndexPage(props){
    const [darkMode, toggleDarkMode] = useState(true)
    const [helloPage, toggleHelloPage] = useState(true)
    const classes = useStyles()
    const rootRef = React.createRef()
    return(
        <ThemeProvider theme={darkMode? darkTheme: lightTheme}>
            <CssBaseline/>
            <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            <SEO title="Home"/>
            <div className={classes.infoContainer}>
                {/* <Slide direction={darkMode?"left":"right"} in={helloPage} appear={false} timeout={800} mountOnEnter unmountOnExit>
                    <Hello/>
                </Slide>
                <About/> */}
            </div>
        </ThemeProvider>
    )
}