gdjs.mainouCode = {};
gdjs.mainouCode.localVariables = [];
gdjs.mainouCode.idToCallbackMap = new Map();
gdjs.mainouCode.GDtitelObjects1= [];
gdjs.mainouCode.GDtitelObjects2= [];
gdjs.mainouCode.GDplayObjects1= [];
gdjs.mainouCode.GDplayObjects2= [];
gdjs.mainouCode.GDsattingObjects1= [];
gdjs.mainouCode.GDsattingObjects2= [];
gdjs.mainouCode.GDQuitObjects1= [];
gdjs.mainouCode.GDQuitObjects2= [];
gdjs.mainouCode.GDMarker_95951Objects1= [];
gdjs.mainouCode.GDMarker_95951Objects2= [];
gdjs.mainouCode.GDbackObjects1= [];
gdjs.mainouCode.GDbackObjects2= [];
gdjs.mainouCode.GDmusicObjects1= [];
gdjs.mainouCode.GDmusicObjects2= [];
gdjs.mainouCode.GDsoundObjects1= [];
gdjs.mainouCode.GDsoundObjects2= [];
gdjs.mainouCode.GDsound2Objects1= [];
gdjs.mainouCode.GDsound2Objects2= [];
gdjs.mainouCode.GDmusic2Objects1= [];
gdjs.mainouCode.GDmusic2Objects2= [];
gdjs.mainouCode.GDMarker_95952Objects1= [];
gdjs.mainouCode.GDMarker_95952Objects2= [];
gdjs.mainouCode.GDplay_95952Objects1= [];
gdjs.mainouCode.GDplay_95952Objects2= [];
gdjs.mainouCode.GDbagroundObjects1= [];
gdjs.mainouCode.GDbagroundObjects2= [];


gdjs.mainouCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_1"), gdjs.mainouCode.GDMarker_95951Objects1);
gdjs.copyArray(runtimeScene.getObjects("Marker_2"), gdjs.mainouCode.GDMarker_95952Objects1);
{for(var i = 0, len = gdjs.mainouCode.GDMarker_95951Objects1.length ;i < len;++i) {
    gdjs.mainouCode.GDMarker_95951Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.mainouCode.GDMarker_95952Objects1.length ;i < len;++i) {
    gdjs.mainouCode.GDMarker_95952Objects1[i].hide();
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "6e093cd344dd1bf2a4d21aa450b2b2a7503b38fef1b3c18d56edb98ca4f33c57_Blippy Trance.aac", false, 20, gdjs.randomInRange(0.1, 1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("satting"), gdjs.mainouCode.GDsattingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDsattingObjects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDsattingObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDsattingObjects1[k] = gdjs.mainouCode.GDsattingObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDsattingObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_2"), gdjs.mainouCode.GDMarker_95952Objects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "gun game", (( gdjs.mainouCode.GDMarker_95952Objects1.length === 0 ) ? 0 :gdjs.mainouCode.GDMarker_95952Objects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInQuad", 0.25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.mainouCode.GDbackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDbackObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDbackObjects1[k] = gdjs.mainouCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker_1"), gdjs.mainouCode.GDMarker_95951Objects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "gun game", (( gdjs.mainouCode.GDMarker_95951Objects1.length === 0 ) ? 0 :gdjs.mainouCode.GDMarker_95951Objects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInQuad", 0.25);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("play_2"), gdjs.mainouCode.GDplay_95952Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDplay_95952Objects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDplay_95952Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDplay_95952Objects1[k] = gdjs.mainouCode.GDplay_95952Objects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDplay_95952Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.mainouCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDQuitObjects1[k] = gdjs.mainouCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sound2"), gdjs.mainouCode.GDsound2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDsound2Objects1.length;i<l;++i) {
    if ( !(gdjs.mainouCode.GDsound2Objects1[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDsound2Objects1[k] = gdjs.mainouCode.GDsound2Objects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDsound2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainouCode.GDsound2Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("sound").setNumber((( gdjs.mainouCode.GDsound2Objects1.length === 0 ) ? 0 :gdjs.mainouCode.GDsound2Objects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("music2"), gdjs.mainouCode.GDmusic2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDmusic2Objects1.length;i<l;++i) {
    if ( !(gdjs.mainouCode.GDmusic2Objects1[i].IsBeingDragged(null)) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDmusic2Objects1[k] = gdjs.mainouCode.GDmusic2Objects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDmusic2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainouCode.GDmusic2Objects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("sound").setNumber((( gdjs.mainouCode.GDmusic2Objects1.length === 0 ) ? 0 :gdjs.mainouCode.GDmusic2Objects1[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.mainouCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.mainouCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_2"), gdjs.mainouCode.GDplay_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("satting"), gdjs.mainouCode.GDsattingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDplay_95952Objects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDplay_95952Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDplay_95952Objects1[k] = gdjs.mainouCode.GDplay_95952Objects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDplay_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDsattingObjects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDsattingObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDsattingObjects1[k] = gdjs.mainouCode.GDsattingObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDsattingObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDQuitObjects1[k] = gdjs.mainouCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDQuitObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.mainouCode.GDbackObjects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDbackObjects1[k] = gdjs.mainouCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16377700);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.mainouCode.GDQuitObjects1 */
/* Reuse gdjs.mainouCode.GDbackObjects1 */
/* Reuse gdjs.mainouCode.GDplay_95952Objects1 */
/* Reuse gdjs.mainouCode.GDsattingObjects1 */
{for(var i = 0, len = gdjs.mainouCode.GDplay_95952Objects1.length ;i < len;++i) {
    gdjs.mainouCode.GDplay_95952Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.mainouCode.GDsattingObjects1.length ;i < len;++i) {
    gdjs.mainouCode.GDsattingObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.mainouCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.mainouCode.GDQuitObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.mainouCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.mainouCode.GDbackObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect", false, 50, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.mainouCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.mainouCode.GDbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("play_2"), gdjs.mainouCode.GDplay_95952Objects1);
gdjs.copyArray(runtimeScene.getObjects("satting"), gdjs.mainouCode.GDsattingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDplay_95952Objects1.length;i<l;++i) {
    if ( !(gdjs.mainouCode.GDplay_95952Objects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDplay_95952Objects1[k] = gdjs.mainouCode.GDplay_95952Objects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDplay_95952Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDsattingObjects1.length;i<l;++i) {
    if ( !(gdjs.mainouCode.GDsattingObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDsattingObjects1[k] = gdjs.mainouCode.GDsattingObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDsattingObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDQuitObjects1.length;i<l;++i) {
    if ( !(gdjs.mainouCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDQuitObjects1[k] = gdjs.mainouCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDQuitObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.mainouCode.GDbackObjects1.length;i<l;++i) {
    if ( !(gdjs.mainouCode.GDbackObjects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.mainouCode.GDbackObjects1[k] = gdjs.mainouCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.mainouCode.GDbackObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.mainouCode.GDQuitObjects1 */
/* Reuse gdjs.mainouCode.GDbackObjects1 */
/* Reuse gdjs.mainouCode.GDplay_95952Objects1 */
/* Reuse gdjs.mainouCode.GDsattingObjects1 */
{for(var i = 0, len = gdjs.mainouCode.GDplay_95952Objects1.length ;i < len;++i) {
    gdjs.mainouCode.GDplay_95952Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.mainouCode.GDsattingObjects1.length ;i < len;++i) {
    gdjs.mainouCode.GDsattingObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.mainouCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.mainouCode.GDQuitObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.mainouCode.GDbackObjects1.length ;i < len;++i) {
    gdjs.mainouCode.GDbackObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}
}

}


};

gdjs.mainouCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.mainouCode.GDtitelObjects1.length = 0;
gdjs.mainouCode.GDtitelObjects2.length = 0;
gdjs.mainouCode.GDplayObjects1.length = 0;
gdjs.mainouCode.GDplayObjects2.length = 0;
gdjs.mainouCode.GDsattingObjects1.length = 0;
gdjs.mainouCode.GDsattingObjects2.length = 0;
gdjs.mainouCode.GDQuitObjects1.length = 0;
gdjs.mainouCode.GDQuitObjects2.length = 0;
gdjs.mainouCode.GDMarker_95951Objects1.length = 0;
gdjs.mainouCode.GDMarker_95951Objects2.length = 0;
gdjs.mainouCode.GDbackObjects1.length = 0;
gdjs.mainouCode.GDbackObjects2.length = 0;
gdjs.mainouCode.GDmusicObjects1.length = 0;
gdjs.mainouCode.GDmusicObjects2.length = 0;
gdjs.mainouCode.GDsoundObjects1.length = 0;
gdjs.mainouCode.GDsoundObjects2.length = 0;
gdjs.mainouCode.GDsound2Objects1.length = 0;
gdjs.mainouCode.GDsound2Objects2.length = 0;
gdjs.mainouCode.GDmusic2Objects1.length = 0;
gdjs.mainouCode.GDmusic2Objects2.length = 0;
gdjs.mainouCode.GDMarker_95952Objects1.length = 0;
gdjs.mainouCode.GDMarker_95952Objects2.length = 0;
gdjs.mainouCode.GDplay_95952Objects1.length = 0;
gdjs.mainouCode.GDplay_95952Objects2.length = 0;
gdjs.mainouCode.GDbagroundObjects1.length = 0;
gdjs.mainouCode.GDbagroundObjects2.length = 0;

gdjs.mainouCode.eventsList0(runtimeScene);
gdjs.mainouCode.GDtitelObjects1.length = 0;
gdjs.mainouCode.GDtitelObjects2.length = 0;
gdjs.mainouCode.GDplayObjects1.length = 0;
gdjs.mainouCode.GDplayObjects2.length = 0;
gdjs.mainouCode.GDsattingObjects1.length = 0;
gdjs.mainouCode.GDsattingObjects2.length = 0;
gdjs.mainouCode.GDQuitObjects1.length = 0;
gdjs.mainouCode.GDQuitObjects2.length = 0;
gdjs.mainouCode.GDMarker_95951Objects1.length = 0;
gdjs.mainouCode.GDMarker_95951Objects2.length = 0;
gdjs.mainouCode.GDbackObjects1.length = 0;
gdjs.mainouCode.GDbackObjects2.length = 0;
gdjs.mainouCode.GDmusicObjects1.length = 0;
gdjs.mainouCode.GDmusicObjects2.length = 0;
gdjs.mainouCode.GDsoundObjects1.length = 0;
gdjs.mainouCode.GDsoundObjects2.length = 0;
gdjs.mainouCode.GDsound2Objects1.length = 0;
gdjs.mainouCode.GDsound2Objects2.length = 0;
gdjs.mainouCode.GDmusic2Objects1.length = 0;
gdjs.mainouCode.GDmusic2Objects2.length = 0;
gdjs.mainouCode.GDMarker_95952Objects1.length = 0;
gdjs.mainouCode.GDMarker_95952Objects2.length = 0;
gdjs.mainouCode.GDplay_95952Objects1.length = 0;
gdjs.mainouCode.GDplay_95952Objects2.length = 0;
gdjs.mainouCode.GDbagroundObjects1.length = 0;
gdjs.mainouCode.GDbagroundObjects2.length = 0;


return;

}

gdjs['mainouCode'] = gdjs.mainouCode;
