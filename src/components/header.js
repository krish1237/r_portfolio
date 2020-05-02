import PropTypes from "prop-types"
import React from "react"
import { Toolbar, makeStyles, Typography, Divider, Switch, FormControlLabel } from '@material-ui/core';
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    padding: `1.2rem`,
  },
  toolbarTitle:{
    flex: 1,
    fontFamily: [`Kaushan Script`, `cursive`],
  },
}))

export default function Header(props){
  const classes = useStyles();
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { darkMode, toggleDarkMode } = props
  const handleChange = (e) => {
    toggleDarkMode(!darkMode)
  }
  return(
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h3"
          variant="h4"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          {site.siteMetadata.title}
        </Typography>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleChange} name="darkMode"/>}
          label="Dark Mode"
        />
      </Toolbar>
      <Divider variant="middle"></Divider>
    </React.Fragment>
  )
}

Header.propTypes = {
  darkMode: PropTypes.bool,
  toggleDarkMode: PropTypes.func
}
