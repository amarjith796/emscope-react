import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import OrderTab from '../../views/OrderTab/';
import Landscape from '../../views/Landscape/';
import RealTimeChart from '../../views/RealTimeChart/';
import ExternalTradeAnalysis from '../../views/ExternalTradeAnalysis/';
import StreamReplayTab from '../../views/StreamReplayTab/';
import DisplayOrder from '../../views/Views/DisplayOrder/';
import ControlCharts from '../../views/Views/ControlCharts/';
import PriceCloud from '../../views/Views/PriceCloud/';
import TCA from '../../views/Views/TCA/';
import DailyMarketRange from '../../views/Views/DailyMarketRange/';
import ContentDelivery from '../../views/Views/ContentDelivery/';
import BigDataAnalysis from '../../views/Views/BigDataAnalysis/';
import LPAJobStatus from '../../views/Views/LPA/LPAJobStatus/';
import LPAReports from '../../views/Views/LPA/LPAReports/';
import LPAReportsVisualization from '../../views/Views/LPA/LPAReportsVisualization/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/ordertab" name="OrderTab" component={OrderTab}/>
                <Route path="/landscape" name="Landscape" component={Landscape}/>
                <Route path="/realtimechart" name="RealTimeChart" component={RealTimeChart}/>
                <Route path="/externaltradeanalysis" name="ExternalTradeAnalysis" component={ExternalTradeAnalysis}/>
                <Route path="/streamreplaytab" name="StreamReplayTab" component={StreamReplayTab}/>
                <Route path="/Views/displayorder" name="DisplayOrder" component={DisplayOrder}/>
                <Route path="/Views/controlcharts" name="ControlCharts" component={ControlCharts}/>
                <Route path="/Views/pricecloud" name="PriceCloud" component={PriceCloud}/>
                <Route path="/Views/tca" name="TCA" component={TCA}/>
                <Route path="/Views/dailymarketrange" name="DailyMarketRange" component={DailyMarketRange}/>
                <Route path="/Views/contentdelivery" name="ContentDelivery" component={ContentDelivery}/>
                <Route path="/Views/bigdataanalysis" name="BigDataAnalysis" component={BigDataAnalysis}/>
                <Route path="/Views/LPA/lpajobstatus" name="LPAJobStatus" component={LPAJobStatus}/>
                <Route path="/Views/LPA/lpareports" name="LPAReports" component={LPAReports}/>
                <Route path="/Views/LPA/lpareportsvisualization" name="LPAReportsVisualization" component={LPAReportsVisualization}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
