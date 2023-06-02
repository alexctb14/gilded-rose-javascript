export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

// Create Subclasses 

//Basic Item 
export class BasicItem extends Item {
  updateQuality() {
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality -= 2;
    } else if (this.quality > 0 && this.quality < 50) {
      this.quality--;
    }
  }  
}
// Cheese Item
export class CheeseItem extends Item {
  updateQuality() {
    this.sellIn--;
    if(this.quality > 0 && this.quality < 50) {
      this.quality++;
    }
  }
}
// Legendary Item
export class LegendaryItem extends Item {
  updateQuality() {
    this.sellIn === 0;
    this.quality === 80;
  }
}
// Conjured Item
export class ConjuredItem extends Item {
  updateQuality() {
    this.sellIn--;
    if(this.quality > 0 && this.quality < 50) {
      this.quality -= 2;
    }
  }
}
// Concert Item
export class ConcertItem extends Item {
  updateQuality() {
    if(this.quality > 0 && this.quality < 50) {
      if (this.sellIn <= 10 && this.sellIn >= 6) {
        this.sellIn--;
        this.quality += 2;
      } else if (this.sellIn <= 5 && this.sellIn >= 0) {
        this.sellIn--;
        this.quality += 3;
      } else if (this.sellIn < 0) {
        this.sellIn--;
        this.quality = 0;
      } else {
        this.sellIn--;
        this.quality++;
      }
    }
  }
}

export let items = [];

export function makeItem(name, sellIn, quality) {
  if (name === "Aged Brie") {
    return new CheeseItem(name, sellIn, quality);
  } else if (name === "Sulfuras, Hand of Ragnaros") {
    return new LegendaryItem(name, sellIn, quality);
  } else if (name === "Backstage passes to a TAFKAL80ETC concert") {
    return new ConcertItem(name, sellIn, quality);
  } else if (name.startsWith("Conjured")) {
    return new ConjuredItem(name, sellIn, quality);
  } else {
    return new BasicItem(name, sellIn, quality);
  }
};

items.push(new BasicItem("+5 Dexterity Vest", 10, 20));
items.push(new CheeseItem("Aged Brie", 2, 0));
items.push(new BasicItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new ConcertItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
    // console.log(item);
  //   if (
  //     item.name != "Aged Brie" &&
  //     item.name != "Backstage passes to a TAFKAL80ETC concert"
  //   ) {
  //     if (item.quality > 0) {
  //       if (item.name != "Sulfuras, Hand of Ragnaros") {
  //         item.quality = item.quality - 1;
  //       }
  //     }
  //   } else {
  //     if (item.quality < 50) {
  //       item.quality = item.quality + 1;
  //       if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
  //         if (item.sellIn < 11) {
  //           if (item.quality < 50) {
  //             item.quality = item.quality + 1;
  //           }
  //         }
  //         if (item.sellIn < 6) {
  //           if (item.quality < 50) {
  //             item.quality = item.quality + 1;
  //           }
  //         }
  //       }
  //     }
  //   }
  //   if (item.name != "Sulfuras, Hand of Ragnaros") {
  //     item.sellIn = item.sellIn - 1;
  //   }
  //   if (item.sellIn < 0) {
  //     if (item.name != "Aged Brie") {
  //       if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
  //         if (item.quality > 0) {
  //           if (item.name != "Sulfuras, Hand of Ragnaros") {
  //             item.quality = item.quality - 1;
  //           }
  //         }
  //       } else {
  //         item.quality = item.quality - item.quality;
  //       }
  //     } else {
  //       if (item.quality < 50) {
  //         item.quality = item.quality + 1;
  //       }
  //     }
  //   }
  }
};