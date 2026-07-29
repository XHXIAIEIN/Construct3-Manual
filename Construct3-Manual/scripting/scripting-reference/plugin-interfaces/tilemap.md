---
title: "Tilemap script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/tilemap"
release: 495
---

## On this page

- [Tile numbers](#tile-numbers)
- [Tilemap APIs](#tile-flags)

---

The `ITilemapInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [Tilemap plugin](../../../plugin-reference/tilemap.md).

## Tile numbers

Tiles in the tilemap are represented as a single 32-bit integer number and can be rotated and flipped. To support this they consist of two parts using a bitmask:

- The tile ID in the lower 29 bits - this is the number of the tile as shown in the Tilemap Bar when hovering the tile
- Tile flags in the upper 3 bits

There is also a special tile number **-1** indicating an empty tile.

### Tile flags

The Tilemap script interface exposes the following flags and masks which can be used to manipulate tile numbers:

```javascript
ITilemapInstance.TILE_FLIPPED_HORIZONTAL = -0x80000000;
ITilemapInstance.TILE_FLIPPED_VERTICAL = 0x40000000;
ITilemapInstance.TILE_FLIPPED_DIAGONAL = 0x20000000;
ITilemapInstance.TILE_FLAGS_MASK = 0xE0000000;
ITilemapInstance.TILE_ID_MASK = 0x1FFFFFFF;
```

For example, to flip tile ID 2 horizontally, you would use bitwise OR combining the tile ID and the flag, e.g. `2 | ITilemapInstance.TILE_FLIPPED_HORIZONTAL`. Similarly you can test if the bit is set using `tile & ITilemapInstance.TILE_FLIPPED_HORIZONTAL`.

You can also use the masks to extract each component of the tile number. For example `tile & ITilemapInstance.TILE_ID_MASK` will return just the tile ID, since it removes all the flag bits.

> **Tip**  
> Be sure to first check if the tile is the special value **-1** indicating an empty tile. This is a special value that doesn't use the bit representation so won't work when combined with flags or masks.

## Tilemap APIs

**mapWidth**  
Read-only numbers representing the size of the tilemap in tiles. The method allows getting both values at the same time.

**mapHeight**  
Read-only numbers representing the size of the tilemap in tiles. The method allows getting both values at the same time.

**getMapSize()**  
Read-only numbers representing the size of the tilemap in tiles. The method allows getting both values at the same time.

**mapDisplayWidth**  
Read-only numbers with the displayed size of the tilemap, in tiles. The method allows getting both values at the same time.

> **Tip**  
> This can differ from `mapWidth` and `mapHeight` if the Tilemap is resized smaller at runtime - in that case the display size will be smaller, but the map size will stay the same.

**mapDisplayHeight**  
Read-only numbers with the displayed size of the tilemap, in tiles. The method allows getting both values at the same time.

> **Tip**  
> This can differ from `mapWidth` and `mapHeight` if the Tilemap is resized smaller at runtime - in that case the display size will be smaller, but the map size will stay the same.

**getMapDisplaySize()**  
Read-only numbers with the displayed size of the tilemap, in tiles. The method allows getting both values at the same time.

> **Tip**  
> This can differ from `mapWidth` and `mapHeight` if the Tilemap is resized smaller at runtime - in that case the display size will be smaller, but the map size will stay the same.

**tileWidth**  
Read-only numbers with the size of a tile in pixels. The method allows getting both values at the same time.

**tileHeight**  
Read-only numbers with the size of a tile in pixels. The method allows getting both values at the same time.

**getTileSize()**  
Read-only numbers with the size of a tile in pixels. The method allows getting both values at the same time.

**getTileAt(x, y)**  
Get the tile at a given position in tiles (i.e. (0, 0) is the top-left tile of the tilemap, regardless of the tilemap's position or the tile size). Returns -1 for empty tiles or tiles outside the tilemap; otherwise use bit operations to determine tile ID or flags separately.

**setTileAt(x, y, tile)**  
Set the tile at a given position in tiles. Use -1 to set a tile empty; otherwise use bit operations to combine the tile ID and flags.

**async replaceImage(blob)**  
Replace the current tilemap image with the contents of a [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) representing an image file such as a PNG image. The blob can be locally generated or retrieved from a URL, for example:

```javascript
// Loading an image from a URL
const response = await fetch(url);
const blob = await response.blob();
await tmInst.replaceImage(blob);
```
