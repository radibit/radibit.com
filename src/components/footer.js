import React from 'react';

import '../styles/footer.css';

const Footer = () => (
  <footer className="c-footer">
    © {new Date().getFullYear()} ️Copyright radibit Ltd. All rights reserved. Built
    with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    {` `}
    and
    {` `}
    <a href="https://www.netlify.com">Netlify</a>
  </footer>
);

export default Footer;
