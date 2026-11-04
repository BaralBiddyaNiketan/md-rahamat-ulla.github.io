gdjs.startCode = {};
gdjs.startCode.localVariables = [];
gdjs.startCode.idToCallbackMap = new Map();
gdjs.startCode.GDNewSpriteObjects1= [];
gdjs.startCode.GDNewSpriteObjects2= [];
gdjs.startCode.GDNewTextObjects1= [];
gdjs.startCode.GDNewTextObjects2= [];
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects2= [];


gdjs.startCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PurpleButtonWithStoneFrame"), gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1[k] = gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "mainou", false);
}
}

}


};

gdjs.startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;

gdjs.startCode.eventsList0(runtimeScene);
gdjs.startCode.GDNewSpriteObjects1.length = 0;
gdjs.startCode.GDNewSpriteObjects2.length = 0;
gdjs.startCode.GDNewTextObjects1.length = 0;
gdjs.startCode.GDNewTextObjects2.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.startCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;


return;

}

gdjs['startCode'] = gdjs.startCode;
