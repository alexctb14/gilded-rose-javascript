import { expect, describe, it, test } from "vitest";
import { Item, items, updateQuality, BasicItem, CheeseItem, LegendaryItem, ConjuredItem, ConcertItem, makeItem} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("Reduces quality and sellIn of basic items by 1", () => {
    const testItem = makeItem("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  //- Once the `sellIn` days is less then zero, `quality` degrades twice as fast.
  it("Reduces item quality by 2 for items with sellIn <0", () => {
    let testItem = makeItem("basic", -2, 8);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(6);
    expect(testItem.sellIn).toBe(-3);
  });

  //The `quality` of an item is never negative.
  it("Does not reduce quality to a negative number", () => {
    let testItem = makeItem("basic", 2, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBeGreaterThanOrEqual(0);
    expect(testItem.sellIn).toBe(1);
  });

  //"Aged Brie" actually increases in `quality` the older it gets.
  it("Aged Brie increases in quality over time", () => {
    let testItem = makeItem("Aged Brie", 3, 8);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(9);
    expect(testItem.sellIn).toBe(2);
  });

  //The `quality` of an item is never more than `50`.
  it("The quality of an item is never over 50", () => {
    let testItem = makeItem("Aged Brie", 3, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(2);
  });

  //"Sulfuras, Hand of Ragnaros," being a legendary item, never has to be sold nor does it decrease in `quality`.
  it("Sulfuras, Hand of Ragnaros does not decrease in time to be sold/quality", () => {
    let testItem = makeItem("Sulfuras, Hand of Ragnaros", 3, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(3);
  });

  // "Backstage passes to a TAFKAL80ETC concert", increase in `quality` as it's `sellIn` value decreases:
  it("Backstage passes to a TAFKAL80ETC concert, increase in quality as sellIn decrease", () => {
    let testItem = makeItem("Backstage passes to a TAFKAL80ETC concert", 15, 25);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(26);
    expect(testItem.sellIn).toBe(14);
  });

  // - `quality` increases by `2` when there are `10` days or less left before the concert.
  it("Backstage passes to a TAFKAL80ETC concert, increase in quality by 2 when sellIn is 10 or less ", () => {
    let testItem = makeItem("Backstage passes to a TAFKAL80ETC concert", 10, 25);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(27);
    expect(testItem.sellIn).toBeLessThanOrEqual(10);
  });

  // - `quality` increases by `3` when there are `5` days or less left before the concert.
  it("Backstage passes to a TAFKAL80ETC concert, increase in quality by 3 when sellIn is 5 or less ", () => {
    let testItem = new makeItem("Backstage passes to a TAFKAL80ETC concert", 5, 25);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(28);
    expect(testItem.sellIn).toBeLessThanOrEqual(5);
  });

  // - `quality` drops to `0` after the concert.
  it("Backstage passes to a TAFKAL80ETC concert, quality drops to 0 once sellIn < 0 ", () => {
    let testItem = makeItem("Backstage passes to a TAFKAL80ETC concert", -1, 25);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBeLessThan(0);
  });

  //- "Conjured" items degrade in `quality` twice as fast as normal items.
  it("Reduce quality by 2 for Conjured items", () => {
    let testItem = makeItem("Conjured Axe", 9, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(8);
    expect(testItem.sellIn).toBe(8);
  })
});
