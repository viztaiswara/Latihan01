import React, { Component } from 'react';
import om from './../Picture/1.jpg';
import dk from './../Picture/2.jpg';
import gn from './../Picture/3.jpg';

class Article extends Component {
  render() {
    return (
      <div>
          <div className="jumbotron">
              <h1 className="display-3">Hello, Welcome to This New Project!</h1>
                  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <hr className="my-4"></hr>
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                  <a className="btn btn-primary btn-lg" href="https://accounts.google.com" role="button">Learn more</a></p>
          </div>
          <div className="row" style={{margin:'50px'}}>
                <div className="col-sm-5 col-md-4">
                  <div className="thumbnail">
                    <img src={om} alt="..."></img>
                    <div className="caption">
                      <h4>Omegamon NXEdgeStyle Series</h4>
                      <p className="label">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p><a href="#" className="btn btn-primary" role="button">Buy</a> <a href="#" className="btn btn-info" role="button">Details</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 col-md-4">
                  <div className="thumbnail">
                    <img src={dk} alt="..."></img>
                    <div className="caption">
                      <h4>Dukemon NXEdgeStyle Series</h4>
                      <p className="label">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p><a href="#" className="btn btn-primary" role="button">Buy</a> <a href="#" className="btn btn-info" role="button">Details</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 col-md-4">
                  <div className="thumbnail">
                    <img src={gn} alt="..."></img>
                    <div className="caption">
                      <h4>Gundam Wing NXEdgeStyle Series</h4>
                      <p className="label">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                      <p><a href="#" className="btn btn-primary" role="button">Buy</a> <a href="#" className="btn btn-info" role="button">Details</a></p>
                    </div>
                  </div>
                </div>
          </div>

            <center><button className="btn btn-primary">click</button></center><br></br>
      </div>
    );
  }
}

export default Article;