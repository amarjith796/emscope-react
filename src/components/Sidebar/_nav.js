export default {
  items: [
    {
      name: 'OrderTab',
      url: '/ordertab',
      icon: 'icon-note',
    },
    {
      name: 'Landscape',
      url: '/landscape',
      icon: 'icon-layers',
    },
    {
      name: 'RealTime',
      url: '/realtimechart',
      icon: 'icon-graph',
    },
    {
      name: 'Stream Replay Tab',
      url: '/streamreplaytab',
      icon: 'icon-chart',
    },
    {
      name: 'External Tab Ananysis',
      url: '/externaltradeanalysis',
      icon: 'icon-doc',
    },
    
    {
      name: 'Views',
      url: '/Views',
      icon: 'icon-layers',
      children: [
       {
      name: 'Display Order',
      url: '/Views/displayorder',
    },
     {
      name: 'Control Charts',
      url: '/Views/controlcharts',
    },
      
    {
      name: 'LPA',
      url: '/Views/LPA',
      children: [
        {
          name: 'LPA Reports',
          url: '/Views/LPA/lpareports',
        },
        {
          name: 'LPA Reports Visualization',
          url: '/Views/LPA/lpareportsvisualization',
        },
        {
          name: 'LPA Job Status',
          url: '/Views/LPA/lpajobstatus',
        }
        ]
    },
     {
      name: 'PriceCloud',
      url: '/Views/pricecloud',
    },
     {
      name: 'TCA',
      url: '/Views/tca',
    },
     {
      name: 'Daily Market Range',
      url: '/Views/dailymarketrange',
    },
     {
      name: 'Content Delivery',
      url: '/Views/contentdelivery',
    },
     {
      name: 'Big Data Analysis',
      url: '/Views/bigdataanalysis',
    }
        ]
    }
  ]
};
