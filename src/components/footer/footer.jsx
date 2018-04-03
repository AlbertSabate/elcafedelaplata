import React, { Component } from 'react'

import './footer.sass'

class Footer extends Component {
  static year = moment().format('YYYY')

  render() {
    return (
      <footer className="text-center container-fluid py-15">
        <div className="row">
          <div className="col">
            Copyright © {Footer.year}. All rights reserved By
            <span className="brand brand-space-left">
              <span>el Café de la Plata</span>
            </span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
