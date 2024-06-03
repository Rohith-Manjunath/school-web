const { google } = require('googleapis');

// Set up authentication
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: 'google-analytics@mysore-international-school.iam.gserviceaccount.com',
    private_key: '32c89a500da36b63c0041817e4200f9f450f47a6',
  },
  scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
});

const analyticsDataClient = google.analyticsdata({
  version: 'v1beta',
  auth: auth,
});

const getAnalyticsData = async (propertyId) => {
  try {
    const response = await analyticsDataClient.properties.runRealtimeReport({
      property: `properties/${propertyId}`,
      requestBody: {
        metrics: [
          {
            name: 'activeUsers',
          },
        ],
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to retrieve analytics data');
  }
};

module.exports = { getAnalyticsData };
