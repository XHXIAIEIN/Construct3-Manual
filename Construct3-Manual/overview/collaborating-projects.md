---
title: "Collaborating on projects"
source: "https://www.construct.net/en/make-games/manuals/construct-3/overview/collaborating-projects"
release: 487.3
---

Currently Construct does not support any real-time online collaboration, due to the extreme technical complexity of the feature. However you can use existing source control tools like **Git** and **SVN** to manage collaborative changes by a team working on the same project.

Source control tools were designed for programmers, but they work well with Construct as well. Make sure you use a folder-based project (see [Saving projects](../overview/saving-projects.md)) in a browser that supports it, e.g. Chrome. This saves your project as a series of individual files within a folder. Then when you make changes, these will appear in source control tools as a series of smaller changes to individual files. Construct's main project data files are in the text-based JSON format, which works well for identifying and merging changes. Each team member can then submit their changes, and these will all be merged in to a single folder-based project. If team members submit contradictory changes, these tools also provide options to resolve the conflict.

> **Tip**  
> When using source control, be sure to configure the tool to ignore `.uistate.json` files. These are only used to restore the user interface (UI) state for individual team members, and aren't meant to be shared. These files are also optional and can be deleted at any time (although Construct's user interface will revert to defaults in places). Leaving these files out of source control will make sure each team member's user interface remains as they prefer, and avoids having to submit unnecessary changes.

It's also advisable to change the *UID numbering* [project property](../project-primitives/projects.md) to *Random* when collaborating on projects. This changes UIDs assigned in the editor from incrementing (e.g. 1, 2, 3, 4...) to random (e.g. 582953, 295630...). This helps avoid potential problems that may arise when two people working on the same project create two different instances which each get assigned the same UID.

Web services like GitHub also exist to simplify setting up and running source control, and these too can be used with Construct folder projects. For a guide on how to set up working on a Construct project on GitHub, see the tutorial [How to collaborate on Construct projects with GitHub](https://www.construct.net/en/tutorials/collaborate-construct-2390).
