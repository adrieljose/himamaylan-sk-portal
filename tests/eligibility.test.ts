import { test } from "node:test";
import assert from "node:assert/strict";
import {
  calculateAgeOnElectionDay as age,
  validateBirthDate,
  assessVoterRequirements,
  parseBirthDate,
} from "../src/lib/eligibility.ts";
test("voting boundary includes election-day birthday with no upper age cap", () => {
  assert.equal(age("2010-05-08").voterAgeMet, true);
  assert.equal(age("2010-05-09").voterAgeMet, false);
  assert.equal(age("2010-05-07").voterAgeMet, true);
  assert.equal(age("1930-01-01").voterAgeMet, true);
});
test("each office has an independent inclusive minimum", () => {
  for (const [year, index] of [
    [2003, 0],
    [1993, 1],
    [1988, 2],
  ]) {
    assert.equal(age(`${year}-05-08`).offices[index].ageMet, true);
    assert.equal(age(`${year}-05-09`).offices[index].ageMet, false);
  }
});
test("calendar parsing rejects impossible, partial and future dates", () => {
  for (const value of [
    "2010-02-30",
    "2010-13-01",
    "2010-5-08",
    "abc",
    "1899-01-01",
  ])
    assert.equal(parseBirthDate(value), null);
  assert.ok(validateBirthDate("2027-01-01", new Date(2026, 10, 15)));
  assert.equal(validateBirthDate("2000-02-29", new Date(2026, 10, 15)), null);
});
test("leap birthday and month end preserve exact calendar duration", () => {
  const a = age("2000-02-29");
  assert.deepEqual([a.years, a.months, a.days], [28, 2, 9]);
  const b = age("2000-01-31");
  assert.deepEqual([b.years, b.months, b.days], [28, 3, 8]);
});
test("unknown answers cannot pass self-assessment", () => {
  assert.match(
    assessVoterRequirements(true, ["", "", "", "", ""]),
    /More information/,
  );
  assert.match(
    assessVoterRequirements(true, ["yes", "yes", "no", "yes", "yes"]),
    /not met/,
  );
  assert.match(
    assessVoterRequirements(false, ["yes", "yes", "yes", "yes", "yes"]),
    /not met/,
  );
  assert.match(
    assessVoterRequirements(true, ["yes", "yes", "yes", "yes", "yes"]),
    /Self-reported/,
  );
});
