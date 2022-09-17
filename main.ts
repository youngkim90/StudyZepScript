/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

const spartan = ScriptApp.loadSpritesheet('spartan.png',64,96, {
  left: [0,1,2,3],
  up: [0],
  down: [0],
  right: [0,1,2,3]
}, 8);

ScriptApp.onJoinPlayer.Add(function(player) {
  ScriptApp.showCenterLabel("Hello World");
  player.sprite = spartan;
  player.title = '김영완두콩';
  player.moveSpeed = 300;
  player.sendUpdated();
})

let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");

ScriptMap.putObject(0, 0, zepLogo, { overlap: true });

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});