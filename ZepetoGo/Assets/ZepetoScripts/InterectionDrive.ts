import { Canvas, AnimationClip, WaitForSeconds, GameObject, Object, Random, Vector3, Quaternion, Sprite } from 'UnityEngine';
import { Button, Image } from 'UnityEngine.UI';
import { ZepetoPlayers, ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script';
import AutoMove from './AutoMove';

export default class InteractionDrive extends ZepetoScriptBehaviour 
{
    public openDriveButton: Button;
    public openDriveLoadButton: Button;
    public openDriveImage: Image;
    public openDriveLoadImage: Image;
    public interactionCanvas: Canvas;
    public SmartCar: GameObject;
    private zepetoCharacter :ZepetoCharacter;

    Start() 
    {    
        // Set EventCamera 
        this.interactionCanvas.worldCamera = ZepetoPlayers.instance.ZepetoCamera.camera;
        // Set character
        ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            this.zepetoCharacter = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer.character;
            
        });
       
        
        //버튼 숨기기
        this.openDriveLoadButton.gameObject.SetActive(false);
        this.openDriveLoadImage.gameObject.SetActive(false);
        this.openDriveButton.gameObject.SetActive(false);
        this.openDriveImage.gameObject.SetActive(false);
        
        //버튼 누를때 좌표이동 후 딜레이 이후 애니메이션 실행
        this.openDriveButton.onClick.AddListener(()=>{
            this.SmartCar.GetComponent<AutoMove>().move = true;
        });

        this.openDriveLoadButton.onClick.AddListener(()=>{
            this.openDriveLoadButton.gameObject.SetActive(false);
            this.openDriveLoadImage.gameObject.SetActive(false);
            this.openDriveButton.gameObject.SetActive(true);
            this.openDriveImage.gameObject.SetActive(true);
        });
    }
    
    OnTriggerEnter(collider)
    {
        this.openDriveLoadButton.gameObject.SetActive(true);
        this.openDriveLoadImage.gameObject.SetActive(true);
    }

   
    OnTriggerExit(collider)
    {
        this.openDriveLoadButton.gameObject.SetActive(false);
        this.openDriveLoadImage.gameObject.SetActive(false);
        this.openDriveButton.gameObject.SetActive(false);
        this.openDriveImage.gameObject.SetActive(false);
    }
  
}