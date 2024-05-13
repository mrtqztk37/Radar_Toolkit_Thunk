export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.654293",
    bl_lng: "25.514642",
    tr_lat: "42.793449",
    tr_lng: "43.185981",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "6af3ef2e3bmsh638aac4d2990866p152bbcjsn18653a7f2192",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

export const headers = {
  "X-RapidAPI-Key": "6af3ef2e3bmsh638aac4d2990866p152bbcjsn18653a7f2192",
  "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
};
