import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyProfile</h2>
      <ul style={styles.links}>
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 30px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontWeight: 'bold',
  },
  links: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  }
};

export default Navbar;