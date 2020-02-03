import React from 'react';

class Account extends React.Component {

  render() {
    console.log(this.props.auth0);
    return (
      <div id="page-wrapper">
        <section id="banner">
          <div className="inner">
            {this.props.auth0.isAuthenticated &&
              <>
                <div className="logo"><span className="icon fa-gem"></span></div>
                <h2>Welcome {this.props.auth0.user.given_name}</h2>
              </>
            }
          </div>
        </section>
      </div>
    );
  }
}


export default Account;
