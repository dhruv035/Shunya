import icsToJson from 'ics-to-json'
export default async function handler(req, res) {

        const response = await fetch(
          "https://calendar.google.com/calendar/ical/r1h1e7hegoqttrdvcjc8n1g1o0%40group.calendar.google.com/private-6ee49faf2401ba5930a25805bff27853/basic.ics"
        );
        
        const icsData = await response.text();
        
        const ajson =  icsToJson(icsData);

        
    res.status(200).json(ajson);
  }
  