import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(){
        return (
            <Html>
                <Head>
		            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel="shortcut icon" href="/images/favicon.png" />
                </Head>
                <body className="is-preload">
                    <div id="wrapper">
                        <header id="header">
                            <div className="inner">
                                    <a href="/" className="logo">
                                        <span className="symbol"><img src="/images/logo.svg" alt="" /></span><span className="title">Phantom</span>
                                    </a>
                                    <nav>
                                        <ul>
                                            <li><a href="#menu">Menu</a></li>
                                        </ul>
                                    </nav>
                            </div>
                        </header>
                        <nav id="menu">
                            <h2>Menu</h2>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="generic.html">Ipsum veroeros</a></li>
                                <li><a href="generic.html">Tempus etiam</a></li>
                                <li><a href="generic.html">Consequat dolor</a></li>
                                <li><a href="elements.html">Elements</a></li>
                            </ul>
                        </nav>
                        <div id="main">
                            <Main />
                            <NextScript />
                        </div>

                        <footer id="footer">
                            <div className="inner">
                                <section>
                                    <h2>Get in touch</h2>
                                    <form method="post" action="#">
                                        <div className="fields">
                                            <div className="field half">
                                                <input type="text" name="name" id="name" placeholder="Name" />
                                            </div>
                                            <div className="field half">
                                                <input type="email" name="email" id="email" placeholder="Email" />
                                            </div>
                                            <div className="field">
                                                <textarea name="message" id="message" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <ul className="actions">
                                            <li><input type="submit" value="Send" className="primary" /></li>
                                        </ul>
                                    </form>
                                </section>
                                <section>
                                    <h2>Follow</h2>
                                    <ul className="icons">
                                        <li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
                                        <li><a href="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
                                        <li><a href="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
                                        <li><a href="#" className="icon brands style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
                                        <li><a href="#" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
                                        <li><a href="#" className="icon brands style2 fa-500px"><span className="label">500px</span></a></li>
                                        <li><a href="#" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
                                        <li><a href="#" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
                                    </ul>
                                </section>
                                <ul className="copyright">
                                    <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                                </ul>
                            </div>
                        </footer>
                    </div>

                    
                    <script src="/assets/js/jquery.min.js"></script>
                    <script src="/assets/js/browser.min.js"></script>
                    <script src="/assets/js/breakpoints.min.js"></script>
                    <script src="/assets/js/util.js"></script>
                    <script src="/assets/js/main.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument