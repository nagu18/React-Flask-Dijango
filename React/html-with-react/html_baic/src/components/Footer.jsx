import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Nagu's Portfolio. All rights reserved.</p>
    </footer>
  );
};
//this where style to
const styles = {
  footer: {
    marginTop: '100vh',
    padding: '15px',
    textAlign: 'center',
    backgroundColor: '#222',
    color: '#fff',
  }
};

export default Footer;