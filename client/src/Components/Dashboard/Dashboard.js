import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faMinus } from '@fortawesome/free-solid-svg-icons';

import { FooterSection } from './DashboardSections/FooterSection/FooterSection';
import { SideNavigation } from './DashboardSections/SideNavigation/SideNavigation';
import { TopNavigation } from './DashboardSections/TopNavigation/TopNavigation';


export const Dashboard = props => {
  return (
    <div className="hold-transition sidebar-mini">
      {/* <!-- Site wrapper --> */}
      <div className="wrapper">
        <TopNavigation />
        <SideNavigation />
        {/* <!-- Content Wrapper. Contains page content --> */}
        <div className="content-wrapper">
          {/* <!-- Content Header (Page header) --> */}
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Blank Page</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Blank Page</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* <!-- /.container-fluid --> */}
          </section>

          {/* <!-- Main content --> */}
          <section className="content">

            {/* <!-- Default box --> */}
            <Card>
              <Card.Header>
                <Card.Title>Title</Card.Title>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                    {/* <i className="fas fa-minus"></i> */}
                    <FontAwesomeIcon icon={faMinus} className="mr-1" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                    {/* <i className="fas fa-times"></i> */}
                    <FontAwesomeIcon icon={faTimes} className="mr-1" />
                  </button>
                </div>
              </Card.Header>
              <Card.Body>
                Start creating your amazing application!
              </Card.Body>
              {/* <!-- /.card-body --> */}
              <Card.Footer>
                Footer
              </Card.Footer>
              {/* <!-- /.card-footer--> */}
            </Card>
            {/* <!-- /.card --> */}

          </section>
          {/* <!-- /.content --> */}
        </div>
        {/* <!-- /.content-wrapper --> */}
        <FooterSection />
      </div>
      {/* <!-- ./wrapper --> */}


    </div>
  );
}