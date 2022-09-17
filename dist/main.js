/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

/* 스파르탄 캐릭터 조작 */
// const spartan = ScriptApp.loadSpritesheet('spartan.png',64,96, {
//   left: [0,1,2,3],
//   up: [0],
//   down: [0],
//   right: [0,1,2,3]
// }, 8);

/* 채팅 조작 */
App.onSay.Add(function (player, text) {
  if (text == '스피드업') {
    player.moveSpeed = 400;
    player.sendUpdated();
  } else if (text == '스피드다운') {
    player.moveSpeed = 40;
    player.sendUpdated();
  } else {
    const message = player.name + '님이 \'' + text + '\' 라고 말했습니다';
    App.showCenterLabel(message);
  }
});
App.onJoinPlayer.Add(function (player) {
  App.showCenterLabel("Hello World"); // player.sprite = spartan;

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