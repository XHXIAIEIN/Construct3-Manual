---
title: "Particles script interface"
source: "https://www.construct.net/en/make-games/manuals/construct-3/scripting/scripting-reference/plugin-interfaces/particles"
release: 495
---

## On this page

- [Particles APIs](#particles-apis)

---

The `IParticlesInstance` interface derives from [IWorldInstance](../../../scripting/scripting-reference/object-interfaces/iworldinstance.md) to add APIs specific to the [Particles plugin](../../../plugin-reference/particles.md).

## Particles APIs

**isSpraying**  
A boolean indicating whether the object is actively emitting particles (when in *Continuous spray* mode).

**rate**  
Set or get the number of particles created per second.

> **Tip**  
> In *One-shot* mode this property can be assigned immediately upon creation to adjust the number of particles created, but once particles are already created assigning the value will have no effect.

**sprayCone**  
Set or get the angle in radians through which particles are fired.

**initSpeed**  
Set or get the initial speed of particles in pixels per second.

**initSize**  
Set or get the initial size of each particle in pixels.

**initOpacity**  
Set or get the initial opacity of each particle, as a float from 0 to 1.

**initXRandom**  
Set or get the range of random offsets to the particle's position on each axis.

**initYRandom**  
Set or get the range of random offsets to the particle's position on each axis.

**initSpeedRandom**  
Set or get the range of random offset to the particle's speed on creation.

**initSizeRandom**  
Set or get the range of random offset to the particle's size on creation.

**initGrowRate**  
Set or get the initial grow rate (change in size over time) for each particle, in pixels per second. Zero will keep the same size over time, a positive value will increase the size of the particle over time, and a negative value will shrink it over time.

**initGrowRandom**  
Set or get the range of random offset to the particle's grow rate on creation.

**acceleration**  
Set or get the acceleration of each particle, in pixels per second per second.

**gravity**  
Set or get the downwards acceleration caused by gravity, in pixels per second per second.

**lifeAngleRandom**  
Set or get an amount of random change to each particle's angle to apply during its lifetime, in radians.

**lifeSpeedRandom**  
Set or get an amount of random change to each particle's speed to apply during its lifetime, in pixels per second.

**lifeOpacityRandom**  
Set or get an amount of random change to each particle's opacity to apply during its lifetime, in the range 0-1.

**timeout**  
Set the time in seconds each particle can last before being destroyed when the *Destroy mode* is *Timeout*.

**setParticleObjectClass(iObjectClass)**  
Call with an [IObjectClass](../../../scripting/scripting-reference/object-interfaces/iobjectclass.md) to set the Particles object to spawn instances of that object class instead of drawing its own particles. Pass `null` to restore the default behavior of the Particles object drawing its own particles. For more information see *Advanced particle effects* in the [Particles manual entry](../../../plugin-reference/particles.md).

**fastForward(time)**  
Skip ahead the particle effect by a time in seconds. For example fast-forwarding by 3 seconds will cause the Particles object to instantly spawn, move and destroy particles as if 3 seconds had gone by. This is useful for making sure particle effects appear ready immediately, rather than taking a few seconds to move their particles out from the spawn point.
