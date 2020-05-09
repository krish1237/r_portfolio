import React from 'react'
import "./hello.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import SvgIcon from '@material-ui/icons/ArrowRightAlt';

class Hello extends React.Component{

    animated = () => {
        var paths = document.querySelectorAll(".line-animated")
        console.log(paths)
        paths.forEach((path) => {
            var length = path.getTotalLength()
            path.style.transition = path.style.WebkitTransition = 'none';
            path.style.strokeDasharray = length + ' ' + length
            path.style.strokeDashoffset = length
            path.getBoundingClientRect()
            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out'
            path.style.strokeDashoffset = '0'
        })
    }

    componentDidMount = () => {
        this.animated()
    }

    render(){
        const { props } = this
        return(
            <div {...props} className="hello-container">
                <svg className="hello-image" version="1.1" xmlns="http://www.w3.org/2000/svg" width="50vw" height="50vh" viewBox="0 0 263.17 60.53">
                <g>
                    <path className="line-animated line-animated-dark" d="M0,59.74V3.19h7.96V27.8h20.71V3.19h7.97v56.55h-7.97V35.37H7.96v24.37H0z"/>
                    <path className="line-animated line-animated-dark" d="M70.17,60.53c-7.2,0-12.75-1.89-16.67-5.67c-3.92-3.78-5.87-9.22-5.87-16.31c0-6.9,1.66-12.27,4.98-16.09
                        c3.32-3.82,8-5.73,14.06-5.73c5.71,0,10.12,1.73,13.24,5.18c3.12,3.45,4.68,8.47,4.68,15.05c0,1.94-0.08,3.74-0.24,5.42H55.83
                        c0.74,3.53,2.42,6.21,5.02,8.02c2.6,1.82,6.03,2.73,10.28,2.73c1.75,0,3.48-0.1,5.18-0.3c1.7-0.2,3.42-0.47,5.18-0.82l1.04,7.41
                        c-2.5,0.48-4.78,0.78-6.85,0.92C73.6,60.47,71.77,60.53,70.17,60.53z M66.75,24.13c-3.27,0-5.87,1.02-7.81,3.07
                        c-1.94,2.04-3.08,4.95-3.42,8.72h21.43c0-3.8-0.9-6.71-2.71-8.74C72.43,25.15,69.93,24.13,66.75,24.13z"/>
                    <path className="line-animated line-animated-dark" d="M119.8,60.53c-4.88,0-8.42-1.33-10.59-3.98c-2.18-2.65-3.27-6.9-3.27-12.74V6.93H93.51V0h20.87v43.41
                        c0,2.23,0.21,4.05,0.64,5.46c0.42,1.41,1.25,2.44,2.49,3.11c1.23,0.66,3.06,1,5.47,1c2.2,0,5.02-0.5,8.44-1.51l0.96,7.41
                        c-2.15,0.58-4.21,1.01-6.19,1.27C124.21,60.4,122.08,60.53,119.8,60.53z"/>
                    <path className="line-animated line-animated-light" d="M167.59,60.53c-4.88,0-8.42-1.33-10.59-3.98c-2.18-2.65-3.27-6.9-3.27-12.74V6.93H141.3V0h20.87v43.41
                        c0,2.23,0.21,4.05,0.64,5.46c0.42,1.41,1.25,2.44,2.49,3.11c1.23,0.66,3.06,1,5.48,1c2.2,0,5.02-0.5,8.44-1.51l0.96,7.41
                        c-2.15,0.58-4.21,1.01-6.19,1.27C172,60.4,169.87,60.53,167.59,60.53z"/>
                    <path className="line-animated line-animated-light" d="M209.48,60.53c-5.84,0-10.38-1.91-13.62-5.73c-3.24-3.82-4.86-9.21-4.86-16.17c0-6.98,1.62-12.38,4.86-16.19
                        c3.24-3.81,7.78-5.71,13.62-5.71c5.87,0,10.41,1.91,13.64,5.71c3.23,3.81,4.84,9.21,4.84,16.19c0,6.96-1.61,12.35-4.84,16.17
                        C219.9,58.62,215.35,60.53,209.48,60.53z M209.48,52.97c3.11,0,5.5-1.25,7.19-3.74c1.69-2.5,2.53-6.03,2.53-10.59
                        c0-4.59-0.84-8.13-2.53-10.61c-1.69-2.48-4.08-3.72-7.19-3.72s-5.5,1.24-7.19,3.72c-1.69,2.48-2.53,6.02-2.53,10.61
                        c0,4.57,0.84,8.1,2.53,10.59C203.98,51.72,206.38,52.97,209.48,52.97z"/>
                    <path className="line-animated line-animated-light" d="M257.27,60.53c-1.62,0-3.01-0.58-4.16-1.73c-1.15-1.15-1.73-2.54-1.73-4.16c0-1.65,0.58-3.04,1.73-4.18
                        c1.16-1.14,2.54-1.71,4.16-1.71c1.65,0,3.04,0.57,4.18,1.71c1.14,1.14,1.71,2.54,1.71,4.18c0,1.62-0.57,3.01-1.71,4.16
                        C260.31,59.96,258.92,60.53,257.27,60.53z"/>
                </g>
                </svg>
                <div className="hello-scroll">
                    <p className="hello-scroll-text">
                        Scroll
                    </p>
                    <SvgIcon className="hello-scroll-icon">
                        <ArrowRightAltIcon/>
                    </SvgIcon>
                </div>
            </div>
        )
    }
}

export default Hello