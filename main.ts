/**
 * Copyright (c) 2022 ZEP Co., LTD
 */

import "zep-script";

/* 스파르탄 캐릭터 조작 */
// const spartan = ScriptApp.loadSpritesheet('spartan.png',64,96, {
//   left: [0,1,2,3],
//   up: [0],
//   down: [0],
//   right: [0,1,2,3]
// }, 8);

/* 채팅 조작 */
ScriptApp.onSay.Add(function(player, text) {
  if(text == '스피드업') {
    player.moveSpeed = 400;
    player.sendUpdated();
  } else if(text == '스피드다운') {
    player.moveSpeed = 40;
    player.sendUpdated();
  } else {
    const message = player.name + '님이 \'' + text + '\' 라고 말했습니다';
    ScriptApp.showCenterLabel(message);
  }
})

const cloud = ScriptApp.loadSpritesheet("cloud.png", 659, 400, [0], 6);

ScriptApp.onJoinPlayer.Add(function(player) {
  ScriptApp.showCenterLabel("Hello World");

  ScriptMap.putObject(5,5,cloud);
  ScriptMap.moveObject(5,5,100,8,30);
});

let zepLogo = ScriptApp.loadSpritesheet("zep_logo.png");

ScriptMap.putObject(0, 0, zepLogo, { overlap: true });

ScriptApp.onDestroy.Add(function () {
  ScriptMap.clearAllObjects();
});
