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

/* 플레이어 충돌 */
ScriptApp.onPlayerTouched.Add(function(sender, target, x, y){
// 플레이어끼리 부딪힐 때 실행
  ScriptApp.showCenterLabel(
		`${sender.name}와 ${target.name}가 좌표 ${x}, ${y} 에서 만나부러쓰`
	);
});

/* 오브젝트 충돌 */
ScriptApp.onObjectTouched.Add(function (sender, x, y, tileID) {
  ScriptMap.putObject(x, y, null);
  ScriptApp.showCenterLabel(
      `${sender.name}가 좌표 ${x}, ${y} 에서 오브젝트와 부딪쳐부러쓰`
  );
});

/* 플레이어 공격 */
ScriptApp.onUnitAttacked.Add(function (sender, x, y, target) {
  ScriptApp.showCenterLabel(`${sender.name}가 ${target.name}를 공격해부러쓰`);
  ScriptApp.sayToAll(`(${x}, ${y})`);
});

/* 오브젝트 공격 */
ScriptApp.onObjectAttacked.Add(function(sender, x, y){
  ScriptApp.showCenterLabel(
      `${sender.name}가 좌표 ${x}, ${y} 에서 오브젝트를 공격해부러쓰`
  );
})

/* 오브젝트 공격 */
ScriptApp.onSidebarTouched.Add(function (player) {
  ScriptApp.sayToAll(`${player.name}님이 사이드바 를 눌러부러쓰`)
});

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
