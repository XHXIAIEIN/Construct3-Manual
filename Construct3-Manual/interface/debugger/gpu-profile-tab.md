---
title: "The debugger 'GPU profiler' tab"
source: "https://www.construct.net/en/make-games/manuals/construct-3/interface/debugger/gpu-profile-tab"
release: 487.2
---

`[Paid plans only]`  The **GPU profiler** tab provides a more detailed breakdown of the estimated GPU usage. This covers work done to render the project's graphics, which is typically done on separate hardware (the Graphics Processing Unit, or GPU). The project must be running continuously for the profiler to be able to collect and display information. It then displays a breakdown of the estimated GPU time spent on each layer. It updates once a second and the values shown are for the previous second only.

[![gpu profiler v550](https://construct-static.com/images/v1740/r/uploads/articleuploadobject/0/images/115443/gpu-profiler_v550.png)](https://construct-static.com/images/v1740/uploads/articleuploadobject/0/images/115443/gpu-profiler.png)

It must be noted that the overall GPU usage is an estimate to begin with, and all other values are therefore estimates as well. However it is usually sufficient to identify which layers are responsible if the GPU usage is high.

> **Tip**  
> GPU measurements can be unreliable, especially when the system is largely idle. Modern devices can deliberately slow down the GPU if not fully loaded in order to save power. This means work takes longer to get done, and these measurements will misleadingly return a higher measurement, since it's based on timing how long the work takes. It will generally only be reliable in the device's maximum performance mode, i.e. under full load.

The measurements are based on the time it takes for the GPU hardware to do the rendering work. It should be noted that these are hardware measurements, and do not involve software. Therefore high GPU measurements are not usually the consequence of any particular software or technology, and will be similar across different tools that send the same work to the GPU. A high GPU measurement indicates that the capabilities of the hardware have been reached; the solution is to adjust the design of the project to require less rendering work, such as fewer objects, fewer layers, reduced use of effects, and so on.

### Profiler breakdown

The GPU profiler works similarly to the CPU profiler, but it displays the approximate GPU time required to render each layer. It shows both the **Self time**, which is the time spent to render that layer alone, as well as the **Total time**, which is the self time plus the time spent rendering any sub-layers. There is also a separate item for the layout itself, whose total time includes all layers, and includes the time to process any layout effects, as well as any layout-level compositing that is required (such as stretching the final image larger in low-quality fullscreen mode).

> **Tip**  
> Layers that use their own texture will always require more GPU time to render, since they require an additional step of copying the entire layer texture to the display afterwards. When using a large viewport in high-quality fullscreen mode, this can consume a lot of GPU bandwidth (also known as fillrate).
