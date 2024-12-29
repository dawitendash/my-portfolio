import React from 'react';

function Footer() {
    return (
        <footer className="text-center bg-gradient text-gray py-5" style={{ background: 'linear-gradient(135deg, #6a11cb, #2575fc)' }}>
            <div className="container">
                <p className="mb-0 fs-6 ">© 2024 Dawit Endashaw. All rights reserved.</p>

                <div className="mt-3">
                    <a href="https://twitter.com" className="text-gray mx-2 fs-4" style={{ transition: 'color 0.3s ease' }}
                        onMouseOver={(e) => e.target.style.color = '#1DA1F2'}
                        onMouseOut={(e) => e.target.style.color = 'white'}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://github.com/dawitendash" className="text-gray mx-2 fs-4" style={{ transition: 'color 0.3s ease' }}
                        onMouseOver={(e) => e.target.style.color = '#6e5494'}
                        onMouseOut={(e) => e.target.style.color = 'white'}>
                        <i className="fab fa-github text-gray"></i>
                    </a>
                    <a href="https://linkedin.com" className="text-white mx-2 fs-4" style={{ transition: 'color 0.3s ease' }}
                        onMouseOver={(e) => e.target.style.color = '#0077b5'}
                        onMouseOut={(e) => e.target.style.color = 'white'}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
