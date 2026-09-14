export default [
  ['Internazionale', 'Milan'],
  ['Roma', 'Lazio'],
  ['APOEL', 'Omonia'],
  ['Benfica', 'Sporting CP'],
  ['Real Madrid', 'Atlético'],
  ['Man City', 'Man United'],
  ['Fenerbahçe', 'Galatasaray'],
  ['København', 'Nordsjælland'],

  // 2027/28 custom season additions (name spellings match this season's
  // pots.json exactly, so these only ever take effect for that data)
  ['Inter', 'Milan'],
  ['Galatasaray', 'Fenerbahce'],
  ['AEK Athens', 'Olympiacos'],
  ['Qarabag', 'Sabah'],
  ['Real Madrid', 'Atletico Madrid'],
  ['Arsenal', 'Chelsea'],
  ['Manchester City', 'Manchester United'],
  ['Benfica', 'Sporting'],
] as const satisfies readonly (readonly [string, string])[];
