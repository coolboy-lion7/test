// Flip to false to turn every exclusion below off without deleting anything.
export const ENABLED = true;

// Undirected pairs: neither team can be drawn against the other, home or
// away - so the pairing stage treats them like it treats same-country
// pairs. Add or remove lines to change who's excluded from meeting whom.
const exclusions: readonly (readonly [string, string])[] = [
  ['Copenhagen', 'Inter'],
  ['Copenhagen', 'Milan'],
  ['Copenhagen', 'Crvena Zvezda'],
  ['Copenhagen', 'Maccabi Tel Aviv'],
];

const exclusionKeys = new Set(
  exclusions.flatMap(([a, b]) => [`${a}\n${b}`, `${b}\n${a}`]),
);

interface WithName {
  readonly name: string;
}

export default (homeTeam: WithName, awayTeam: WithName) =>
  ENABLED && exclusionKeys.has(`${homeTeam.name}\n${awayTeam.name}`);
