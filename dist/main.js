/**
 * Copyright (c) 2022 ZEP Co., LTD
 */
const spartan = App.loadSpritesheet('spartan.png', 64, 96, {
  left: [0, 1, 2, 3],
  up: [0],
  down: [0],
  right: [0, 1, 2, 3]
}, 8);
App.onJoinPlayer.Add(function (player) {
  App.showCenterLabel("Hello World");
  player.sprite = spartan;
  player.title = '김영완두콩';
  player.moveSpeed = 300;
  player.sendUpdated();
});
let zepLogo = App.loadSpritesheet("zep_logo.png");
Map.putObject(0, 0, zepLogo, {
  overlap: true
});
App.onDestroy.Add(function () {
  Map.clearAllObjects();
});