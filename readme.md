# tabber

> Guitar tab viewer and editor

## Motivation

I'm a casual guitarist. Frequently I need to look up tabs to songs, or record them.

Guitar Pro has been wonderful for this. Unfortunately it is not free, and I don't use enough of its feature to justify a purchase.

Therefore I'm building my own tab software.

- display tab
  - ascii style
  - strings and their labels
  - measures
- edit tab
  - move around using arrow key. In the future, click?
  - overtype cursor. replace an empty space on the tab
  - insert notes
    - a note's editing doesn't stop until user moves out of that note - either through arrow keys or space
  - autoformat
    - when editing a note on one string, the rest of the strings should adjust their spacing
    - note that a note might contain varied amount of characters
  - move between notes
    - ctrl + arrow
  - move between measures
    - possibly a variation of ctrl + arrow. throw alt key in there?
  - delete whole notes
    - ctrl + delete/backspace
- play tab
  - set BPM
  - autoscroll measures
  - generate and play midi/audio from tab