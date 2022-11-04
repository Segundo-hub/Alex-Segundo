import React from 'react'

export default function HtmlTemplate(props) {
    return (
        <html lang='en' {...props.htmlAttributes}>
            <head>
                <meta charSet='utf-8' />
                <meta httpEquiv='x-ua-compatible' content='ie=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                <link rel='preconnect' href='https://fonts.googleapis.com' />
                <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Expletus+Sans&family=IBM+Plex+Sans+Condensed:wght@300;400;500&family=Rajdhani:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap'
                    rel='stylesheet'
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id='___gatsby'
                    dangerouslySetInnerHTML={{ __html: props.body }}
                    className='abs-center h-screen w-second--root'
                />
                {props.postBodyComponents}
                <div id='__portal-target' />
            </body>
        </html>
    )
}
