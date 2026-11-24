# one-prompt-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/dogsme/one-prompt-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/dogsme/one-prompt-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt went in; a complete arcade game came out. An AI agent was handed a
single sentence (kept verbatim in `PROMPT.txt`) and, working from that alone,
wrote **NEON BREAKER**: a neon brick-breaker that lives entirely in one
self-contained HTML file. No scaffolding, no starter code, no external assets —
just `index.html`.

What the one prompt produced:

- A glowing paddle-and-ball breaker with particle explosions, screen shake,
  ball trails and floating score popups
- A combo multiplier for chained hits, and falling power-ups that split the
  ball, widen the paddle and switch on paddle lasers
- Three waves that get faster and meaner (later bricks take two hits), and a
  giant boss brick with a health bar guarding the final wave
- Three lives, a win screen and a game-over screen; arrow-key, mouse and
  touch controls

The proof is the clip. `epic-clip.mp4` (44 seconds) shows the prompt being
typed, the agent writing the game's code, and then real gameplay recorded
from the finished file — multi-ball chaos, laser fire, and the boss brick
going down. The post itself is on X:
https://x.com/pixiemem/status/2125120830678127031

Play it by opening `index.html` in any browser. Press Space (or tap) to
launch the ball; steer with the arrow keys, the mouse, or touch.

`main.ts` is the entrypoint the bounty grades: it validates `POST.json` —
the record of the X post — and copies it to `/output`.

## Run it

```sh
node --experimental-strip-types main.ts   # or: npx tsx main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=j9a0cw4k&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
