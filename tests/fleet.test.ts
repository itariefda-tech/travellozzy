import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../content/fleet.ts', import.meta.url), 'utf8');

void test('real fleet inventory contains 18 unique vehicles with quote-only pricing', () => {
  const slugs = [...source.matchAll(/slug: '([^']+)'/g)].map((match) => match[1]);
  assert.equal(slugs.length, 18);
  assert.equal(new Set(slugs).size, 18);
  assert.equal((source.match(/priceMode: 'quote'/g) ?? []).length, 18);
});

void test('featured fleet and filters expose the required categories', () => {
  assert.deepEqual(
    [...source.matchAll(/'([a-z0-9-]+)',/g)].map((match) => match[1]).slice(-8),
    [
      'toyota-alphard-gen-4-hybrid',
      'toyota-innova-zenix-q',
      'toyota-hiace-premio',
      'mercedes-benz-c300',
      'toyota-fortuner-gr',
      'mitsubishi-pajero-sport',
      'mitsubishi-xpander',
      'toyota-avanza-new',
    ],
  );
  assert.match(source, /label: 'All'[\s\S]*label: 'Luxury'[\s\S]*label: 'Premium'[\s\S]*label: 'Family'[\s\S]*label: 'SUV'[\s\S]*label: 'Group'/);
});

void test('every mapped fleet image exists in the public gallery', () => {
  const imagePaths = [...source.matchAll(/image: '(\/images\/fleet\/[^']+)'/g)].map((match) => match[1]);
  assert.equal(imagePaths.length, 14);
  for (const imagePath of imagePaths) {
    assert.ok(existsSync(new URL(`../public${imagePath}`, import.meta.url)), `Missing ${imagePath}`);
  }
});
